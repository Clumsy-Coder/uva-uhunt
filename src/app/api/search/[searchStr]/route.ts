import { NextResponse } from "next/server";
import { z } from "zod";

import { searchSchema as schema } from "@/schema";
import {
  uhuntProblemNumUrl,
  uhuntUsername2UidUrl,
} from "@/utils/constants";
import { Problem, SearchResultType } from "@/types";

type getParamsType = {
  params: z.infer<typeof schema>;
};

export const GET = async(_request: Request, {params}: getParamsType) => {
  const { searchStr } = params;
  const responseData: SearchResultType[] = []

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
  const usernameUrl = uhuntUsername2UidUrl(searchStr);
  const usernameResponse = await fetch(usernameUrl);
  const usernameData: number = await usernameResponse.json();

  // add search result to array if user exists
  if (usernameData !== 0) {
    responseData.push({
      title: `User: '${searchStr}'`,
      href: `/users/${searchStr}`
    })
  }

  //----------------------------------------------------------------------------------------------//

  // fetch problem number
  const problemNumUrl = uhuntProblemNumUrl(searchStr)
  const problemNumResponse = await fetch(problemNumUrl)
  const problemNumData: Problem = await problemNumResponse.json()

  if(Object.entries(problemNumData).length !== 0) {
    const {num, title} = problemNumData
    responseData.push({
      title: `Problem: ${num} '${title}'`,
      href: `/problems/${num}`
    })
  }

  return Response.json(responseData)

}
