import { NextResponse } from "next/server";
import { z } from "zod";

import { submissionLangSchema as schema } from "@/schema";
import {
  uhuntProblemNumUrl,
  uhuntProblemSubmissionListUrl,
} from "@/utils/constants";
import { Language, Problem, Submission, SubmissionLangType } from "@/types";

type getParamsType = {
  params: z.infer<typeof schema>;
};

export type getResponseType = Record<string, number>;

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

  // fetch problem stats
  const { problemNum } = params;

  const problemUrl = uhuntProblemNumUrl(problemNum);
  const problemResponse = await fetch(problemUrl);
  const problemData: Problem = await problemResponse.json();

  // return 404 if problem doesn't exist
  if (Object.entries(problemData).length === 0) {
    const message = {
      message: `Problem number ${problemNum} not found`,
    };
    return NextResponse.json(message, {
      status: 404,
    });
  }

  //----------------------------------------------------------------------------------------------//

  // fetch submissions of the problem
  const submissionsUrl = uhuntProblemSubmissionListUrl(problemData.pid);
  const submissionResponse = await fetch(submissionsUrl, { cache: "no-cache" });
  const submissionData: Submission["msg"][] = await submissionResponse.json();

  // map language id as key and 0 as value. (the value will be count of a submission language)
  const languageObj = Object.keys(Language).reduce(
    (acc: Record<string, number>, cur: string) => {
      acc[cur] = 0;

      return acc;
    },
    {},
  );

  // increment count of key-value for their respective language ID
  const reducedData: Record<string, number> = submissionData.reduce((acc, cur) => {
    const languageId = cur.lan;
    acc[languageId] = acc[languageId] + 1;

    return acc;
  }, languageObj);
  delete reducedData["undefined"];

  const processedData: SubmissionLangType[] = Object.entries(reducedData).map(
    ([key, value]) => {
      return {
        language: Language[key],
        count: value,
      };
    },
  );

  return Response.json(processedData);
};
