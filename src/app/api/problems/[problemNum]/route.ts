import { NextResponse } from "next/server";
import { z } from "zod";

import { uhuntProblemNumUrl } from "@/utils/constants";

type getParamsType = {
  params: {
    problemNum: string;
  };
};

export const GET = async (_request: Request, { params }: getParamsType) => {
  const schema = z.object({
    problemNum: z.coerce
      .number({ invalid_type_error: "Must be a number" })
      .min(1, "Must be a number greater than 0"),
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

  const { problemNum } = params;

  const url = uhuntProblemNumUrl(problemNum);

  const response = await fetch(url);
  const data = await response.json();

  return Response.json(data);
};
