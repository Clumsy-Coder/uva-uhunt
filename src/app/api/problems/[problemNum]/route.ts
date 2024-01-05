import { NextResponse } from "next/server";
import { z } from "zod";

import { uhuntProblemNumUrl } from "@/utils/constants";
import { Problem, ProblemStatus } from "@/types";
import { problemNumSchema as schema } from "@/schema";

type getParamsType = {
  params: z.infer<typeof schema>;
};

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

  const { problemNum } = params;

  const url = uhuntProblemNumUrl(problemNum);

  const response = await fetch(url);
  const data: Problem = await response.json();

  if(Object.entries(data).length === 0) {
    const message = {
      message: `Problem number ${problemNum} not found`
    }
    return NextResponse.json(message, {
      status: 404,
    });
  }

  data.status = ProblemStatus[data.status]

  return Response.json(data);
};
