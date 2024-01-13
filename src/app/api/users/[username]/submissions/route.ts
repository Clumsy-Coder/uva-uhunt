import { NextResponse } from "next/server";
import { z } from "zod";

import { userSchema as schema } from "@/schema";
import {
  uhuntUserSubmissionsUrl,
  uhuntUsername2UidUrl,
} from "@/utils/constants";
import {
  Language,
  Problem,
  ProblemVerdictMap,
  UserSub,
  UserSubmission,
} from "@/types";

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

  // fetch all problems
  // this is needed because later each submission will need problem number and problem title.
  //    if repeatedly fetching from upstream api server, it will slow down.
  const allProblemsUrl = `http://localhost:${process.env.PORT}/api/problems`;
  const allProblemsResponse = await fetch(allProblemsUrl);
  const allProblemsData: Problem[] = await allProblemsResponse.json();

  // fetch submissions of the user
  const userSubmissionsUrl = uhuntUserSubmissionsUrl(usernameData);
  const userSubmissionResponse = await fetch(userSubmissionsUrl, {
    cache: "no-cache",
  });
  const userSubmissionData =
    (await userSubmissionResponse.json()) as UserSubmission;

  // change userSubmissionData.sub[] into UserSub[]
  // originally the upstream api would return `userSubmissionData.sub` as an array of array
  // // ex:
  // [
  //   [
  //     0: 5251911       // submission ID
  //     1: 62            // problem ID
  //     2: 10            // verdict ID
  //     3: 0             // runtime
  //     4: 1168359789    // submission time
  //     5: 4             // language ID
  //     6: -1            // rank
  //   ]
  // ]
  const converted = (userSubmissionData.subs as unknown as number[][])
    .sort((a, b) => b[4] - a[4]) // sort by submission time in descending order
    .slice(0, 500) // take only the most recent 500 submissions
    .map((submission: number[]) => {
      const converted: Partial<UserSub> = {};
      converted.sid = submission[0];
      converted.pid = submission[1];
      converted.ver = submission[2];
      converted.run = submission[3];
      converted.sbt = submission[4];
      converted.lan = submission[5] as unknown as string;
      converted.rank = submission[6];

      const problemData = allProblemsData.find(
        (problem) => problem.pid === converted.pid,
      );

      converted.pnum = (problemData as Problem).num;
      converted.pTitle = (problemData as Problem).title;
      converted.verdict = ProblemVerdictMap[converted.ver as number] || {
        fgColor: "text-primary-foreground dark:text-secondary-foreground",
        bgColor: "bg-gray-500",
        title: "- In Queue -",
        fgHex: "",
        bgHex: "6b7280",
      };
      converted.lan = Language[converted.lan];

      return converted;
    });

  userSubmissionData.subs = converted as unknown as UserSub[];

  return Response.json(userSubmissionData);
};
