import { NextResponse } from "next/server";
import { z } from "zod";

import { Language, Problem, Submission, Verdict } from "@/types";
import { fetchLiveSubmissionsUrl, uhuntProblemIdUrl } from "@/utils/constants";

type getParamsType = {
  params: {
    pollId: string;
  };
};

export const GET = async (_request: Request, { params }: getParamsType) => {
  const schema = z.object({
    pollId: z.coerce
      .number({ invalid_type_error: "Must be a number" })
      .min(0, "Must be a number greater than 0"),
  });

  const schemaResponse = await schema.safeParseAsync(params);
  if (!schemaResponse.success) {
    const message = {
      message: schemaResponse.error.issues[0].message,
    };

    return NextResponse.json(message, {
      status: 400,
    });
  }

  const { pollId } = params;

  const url = fetchLiveSubmissionsUrl(+pollId);

  const fetchResponse = await fetch(url);
  const data: Submission[] = await fetchResponse.json();

  const converted = data
    .map(async (submission: Submission) => {
      submission.msg.verdictStr = Verdict[submission.msg.ver] || "- In Queue -";
      submission.msg.lan = Language[submission.msg.lan];

      // add problem number to the object
      const pidUrl = uhuntProblemIdUrl(`${submission.msg.pid}`);
      const pidResponse = await fetch(pidUrl);
      const pidData: Problem = await pidResponse.json();
      submission.msg.pnum = pidData.num;
      submission.msg.pTitle = pidData.title;

      submission.msg.rank =
        +submission.msg.rank < 0 ? "-" : submission.msg.rank;

      return submission;
    })
    .reverse();

  // using Promise.all because the map function is using an async function
  // use Promise.all to resolver async operations
  // obtained from: https://stackoverflow.com/a/68279968/3053548
  const response = await Promise.all(converted);

  return Response.json(response);
};
