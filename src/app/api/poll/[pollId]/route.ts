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
  await Promise.all(converted);

  // the latest submission is the last element. so reversing it will give the latest submission first
  let processedSubmission = data.reverse();
  // group by submission id
  // there are multiple elements with the same submission ID.
  // The first one is usually indicating `in queue`.
  // the second one is a verdict of the submission
  processedSubmission = Array.from<Submission>(
    data
      .reduce(
        (entryMap, submission) =>
          entryMap.set(submission.msg.sid, [
            ...(entryMap.get(submission.msg.sid) || []),
            submission,
          ]),
        new Map(),
      )
      .values(),
  );
  // take the latest submission from grouped array elements
  // the grouped submissions will have one element with the verdict of `in queue` and the other final verdict
  processedSubmission = processedSubmission.reduce(
    (result: Submission[], value, key) => [
      ...result,
      { ...value[0], msg: value[0].msg },
    ],
    [],
  );
  //sort submission by submission time in descending order
  processedSubmission.sort((a, b) => b.msg.sbt - a.msg.sbt);

  return Response.json(processedSubmission);
};
