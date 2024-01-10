import { NextResponse } from "next/server";
import { z } from "zod";

import { problemNumRanklistSchema as schema } from "@/schema";
import { Language, Problem, ProblemVerdictMap, Submission } from "@/types";
import { uhuntProblemNumUrl, uhuntProblemRankUrl } from "@/utils/constants";

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

  // fetch problem ranklist
  const ranklistUrl = uhuntProblemRankUrl(problemData.pid, 1, 10);
  const ranklistResponse = await fetch(ranklistUrl);
  const ranklistData: Submission["msg"][] = await ranklistResponse.json();

  // add properties to the ranklist array
  const converted = ranklistData.map((rank: Submission["msg"]) => {
    rank.verdict = ProblemVerdictMap[rank.ver] || {
      fgColor: "text-primary-foreground dark:text-secondary-foreground",
      bgColor: "bg-gray-500",
      title: "- In Queue -",
      fgHex: "",
      bgHex: "6b7280",
    };
    rank.lan = Language[rank.lan] || "--";
    rank.pnum = problemData.num;
    rank.pTitle = problemData.title;

    return rank;
  });

  return Response.json(converted);
};
