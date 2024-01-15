import { z } from "zod";

import { NextResponse } from "next/server";

import { userSchema as schema } from "@/schema";
import {
  Language,
  SubmissionLangType,
  SubmissionsOvertimeLineChartType,
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

  // count submissions by year
  const initData: Record<string, number> = {};
  let reducedData = userSubmissionData.subs.reduce((obj, cur, index) => {
    const year = moment.unix(cur[4]).format("YYYY");
    obj[year] = obj[year] + 1 || 1;

    return obj;
  }, initData);

  // add current year if it doesn't exist
  // this to make sure the chart draws a lint upto the current year
  const curYear = new Date().getFullYear()
  if(reducedData[curYear] === undefined) {
    reducedData[curYear] = 0
  }

  // add missing years
  // - loop through the array starting from index 1 going upto last array element
  //   - convert processedData into an array using Object.entries
  //     - sort the array
  //   - get the current element and previous element
  //   - loop through the difference between curYear and prevYear
  //     - add entry to `processedData`
  for (let i = 1; i < Object.entries(reducedData).length; i++) {
    const sorted = Object.entries(reducedData).sort((a, b) => +a[0] - +b[0]);
    const curYear = +sorted[i][0];
    const prevYear = +sorted[i - 1][0];

    // if (curYear - prevYear > 1) {
    for (let k = prevYear + 1; k < curYear; k++) {
      reducedData[k] = 0;
    }
    // }
  }

  // calculate cumulative sum
  for (let i = 1; i < Object.entries(reducedData).length; i++) {
    const sorted = Object.entries(reducedData).sort((a, b) => +a[0] - +b[0]);
    const [curYear, curYearCount] = sorted[i];
    const [prevYear, prevYearCount] = sorted[i - 1];

    reducedData[curYear] = curYearCount + prevYearCount;
  }

  // construct data structure for Rechart area/line chart
  const initProcessedData: SubmissionsOvertimeLineChartType[] = [];
  const processedData: SubmissionsOvertimeLineChartType[] = Object.entries(
    reducedData,
  ).reduce((obj, cur, index) => {
    const [year, count] = cur;
    obj.push({
      name: "submissions",
      time: year,
      submissions: count,
      fill: "#8884d8",
    });

    return obj;
  }, initProcessedData);

  return Response.json(processedData);
};
