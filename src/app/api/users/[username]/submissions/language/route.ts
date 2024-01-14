import { z } from "zod";

import { NextResponse } from "next/server";

import { userSchema as schema } from "@/schema";
import { Language, SubmissionLangType } from "@/types";
import { RawUserSubmission } from "@/types/raw";
import {
  uhuntUserSubmissionsUrl,
  uhuntUsername2UidUrl,
} from "@/utils/constants";

type getParamsType = {
  params: z.infer<typeof schema>;
};

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
    (await userSubmissionResponse.json()) as RawUserSubmission;

  // map language id as key and 0 as value. (the value will be count of a submission language)
  let languageObj = Object.keys(Language).reduce(
    (acc: Record<string, number>, cur: string) => {
      acc[cur] = 0;

      return acc;
    },
    {},
  );

  // count the submissions by language id
  // object key: language ID
  // object value: count
  const reducedData = userSubmissionData.subs.reduce((acc, cur) => {
    const languageId = cur[5];
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
