import { uhuntProblemNumUrl } from "@/utils/constants";

type getParamsType = {
  params: {
    problemNum: string;
  };
};

export const GET = async (_request: Request, { params }: getParamsType) => {
  const { problemNum } = params;

  const url = uhuntProblemNumUrl(problemNum);

  const response = await fetch(url);
  const data = await response.json();

  return Response.json(data);
};
