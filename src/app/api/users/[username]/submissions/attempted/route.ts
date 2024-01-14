
import { z } from "zod";

import { NextResponse } from "next/server";

import { userSchema as schema } from "@/schema";
import {
  Language,
  ProblemVerdictMap,
  SubmissionLangType,
  SubmissionsOvertimeLineChartType,
  SubmissionSovledVsAttempted
} from "@/types";
import { RawUserSubmission } from "@/types/raw";
import {
  uhuntUserSubmissionsUrl,
  uhuntUsername2UidUrl,
} from "@/utils/constants";
import moment from "moment";

type getParamsType = {
  params: z.infer<typeof schema>;
};

export const GET = async (_request: Request, {params}: getParamsType) => {
  // validate params
  const schemaResponse = await schema.safeParseAsync(params);
  if (!schemaResponse.success) {
    const message = {
      message: schemaResponse.error.issues[0].message,
    };

    return NextResponse.json(message, {
      status: 400,
    });
  }

  //----------------------------------------------------------------------------------------------//

  // fetch username ID
  const { username } = params;

  const usernameUrl = uhuntUsername2UidUrl(username);
  const usernameResponse = await fetch(usernameUrl);
  const usernameData: number = await usernameResponse.json();

  // return 404 if problem doesn't exist
  if (usernameData === 0) {
    const message = {
      message: `Username ${username} not found`,
    };
    return NextResponse.json(message, {
      status: 404,
    });
  }

  //----------------------------------------------------------------------------------------------//
  // fetch submissions of the user
  const userSubmissionsUrl = uhuntUserSubmissionsUrl(usernameData);
  const userSubmissionResponse = await fetch(userSubmissionsUrl, {
    cache: "no-cache",
  });
  const userSubmissionData =
    (await userSubmissionResponse.json()) as RawUserSubmission;

  // count solved submissions
  // use a set to keep track of problems solved
  const set = new Set();

  const verdictSolvedId = 90
  userSubmissionData.subs.forEach(cur => {
    // cur[2] : verdict ID
    if(cur[2] === verdictSolvedId) {
      set.add(cur[1]) // add problem ID
    }
  })

  const processedData: SubmissionSovledVsAttempted[] = [
    {
      name: "Solved",
      count: set.size,
      tooltipTitle: "Solved unique problems",
      fill: ProblemVerdictMap.ac.bgHex
    },
    {
      name: "Attempts",
      count: userSubmissionData.subs.length,
      tooltipTitle: "Submission attempts",
      fill: ProblemVerdictMap.inq.bgHex
    }
  ]

  return Response.json(processedData)
}
