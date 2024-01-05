"use client";

import { useFetchProblemNum } from "@/hooks";
import { problemNumSchema } from "@/schema";
import { AxiosError } from "axios";
import { z } from "zod";
import Error from "@/components/error";

type problemPageProps = {
  params: z.infer<typeof problemNumSchema>;
};

const ProblemPage = ({ params }: problemPageProps) => {
  const {
    isLoading: problemNumIsLoading,
    isSuccess: problemNumIsSuccess,
    isError: problemNumIsError,
    data: problemNumData,
    error: problemNumError,
  } = useFetchProblemNum(params.problemNum);

  if (problemNumIsLoading) {
    return (
      <section>
        <h1 className="text-3xl">Loading: {params.problemNum}</h1>
      </section>
    );
  }

  if (problemNumIsError) {
    type ErrorMessage = {
      message: string;
    };

    if (
      (problemNumError as AxiosError<ErrorMessage>).response?.status === 400
    ) {
      return (
        <Error
          status={400}
          message={
            (problemNumError as AxiosError<ErrorMessage>).response?.data.message
          }
        />
      );
    } else if (
      (problemNumError as AxiosError<ErrorMessage>).response?.status === 404
    ) {
      return <Error status={404} message={"Problem number not found"} />;
    }
  }

  if (problemNumIsSuccess) {
    console.log(problemNumData);
  }

  console.log("problem page: ", params.problemNum);
  return (
    <section>
      <h1 className="text-3xl">Problem page: {params.problemNum}</h1>
    </section>
  );
};

export default ProblemPage;