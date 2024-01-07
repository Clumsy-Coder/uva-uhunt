import { z } from "zod";

import { submissionOvertimeSchema as schema } from "@/schema";
import { NextResponse } from "next/server";
import { uhuntProblemNumUrl, uhuntSubmissionCountUrl } from "@/utils/constants";
import { Problem } from "@/types";
import moment, { Moment } from "moment";

type getParamsType = {
  params: z.infer<typeof schema>;
};

export type getResponseType = {
  name: string;
  time: string; // time formatted to year
  submissions: number;
  fill: string;
}

/**
 * Get the submission count of a problem using `problem number`
 * The submission count will be a cumulative submission count
 *
 * if invalid `problem number` is given, a response of 400 will be returned
 * if the problem doesn't exist, a response of 400 will be returned
 */
export const GET = async (_request: Request, { params }: getParamsType) => {
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

  const { problemNum } = params;

  const problemUrl = uhuntProblemNumUrl(problemNum);
  const problemResponse = await fetch(problemUrl);
  const problemData: Problem = await problemResponse.json();

  if (Object.entries(problemData).length === 0) {
    const message = {
      message: `Problem number ${problemNum} not found`,
    };
    return NextResponse.json(message, {
      status: 404,
    });
  }

  //----------------------------------------------------------------------------------------------//

  const submssionCountUrl = uhuntSubmissionCountUrl(problemData.pid);
  const submissionResponse = await fetch(submssionCountUrl);
  const submissionData: number[] = await submissionResponse.json();

  // sum the submission count
  // each element is a cumulative sum of the previous
  const data = submissionData.reduce(
    (acc: number[], cur: number, i) =>
      i === 0 ? [cur] : [...acc, acc[acc.length - 1] + cur],
    [],
  );
  // map each element to the year.
  // use values from the url
  // Ex: https://uhunt.onlinejudge.org/api/p/count/36/1704664602/20/12
  //     36 : pid
  //     1704664602 : the time to look back on. usually the current time (unix time). Look back from this time
  //     20 : return number of years of submission. in this case 20 years
  //     12 : Number of months each array element will represent
  const submissionUrlSplit = submssionCountUrl.split("/");
  const thirtyDaysInSeconds = 60 * 60 * 24 * 30;
  const responseData:getResponseType[] = data.map((cur, i) => {
    const submissionTime = +submissionUrlSplit[7];
    const back = +submissionUrlSplit[8];
    const jump = +submissionUrlSplit[9];
    const unixTime = submissionTime - (back - i) * thirtyDaysInSeconds * jump;

    return {
      name: "submissions",
      time: moment.unix(unixTime).format("YYYY"),
      submissions: cur,
      fill: "#8884d8"
    };
  });

  return Response.json(responseData);
};
