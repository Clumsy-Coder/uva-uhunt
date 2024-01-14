import { NextResponse } from "next/server";
import { z } from "zod";

import { userSchema as schema } from "@/schema";
import {
  uhuntUserSubmissionsUrl,
  uhuntUsername2UidUrl,
} from "@/utils/constants";
import {
  ProblemVerdictMap,
  UserSubmission,
  UserSubmissionBarChartType,
} from "@/types";

type getParamsType = {
  params: z.infer<typeof schema>;
};

/**
 * Get the user submissions by verdicts
 * The data returned will be used in Rechart `bar` chart
 */
export const GET = async (_request: Request, { params }: getParamsType) => {
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
    (await userSubmissionResponse.json()) as UserSubmission;

  const filter = ["ac", "pe", "wa", "tle", "mle", "ce", "re", "ole"];
  // count the verdicts by their verdict ID.
  // use verdictShort as the object key
  // this will be used when later when constructing the data for recharts
  const reducedData = (userSubmissionData.subs as unknown as number[][]).reduce(
    (obj: Record<string, number>, cur, _index) => {
      const verdict = ProblemVerdictMap[cur[2]];
      obj[verdict.verdictShort] = obj[verdict.verdictShort] + 1 || 1;

      return obj;
    },
    {},
  );

  const processedData: UserSubmissionBarChartType[] = filter.map((verdict) => {
    return {
      name: verdict.toUpperCase(),
      verdict: reducedData[verdict] || 0,
      tooltipTitle: ProblemVerdictMap[verdict].title,
      fill: ProblemVerdictMap[verdict].bgHex,
    };
  });

  return Response.json(processedData);
};
