"use client";

import { AxiosError } from "axios";
import { z } from "zod";

import Error from "@/components/error";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useFetchProblemNum } from "@/hooks";
import { problemNumSchema } from "@/schema";


type ChartCard = {
  title: string;
  chart: React.ReactNode;
}
const ChartCard = ({title, chart}: ChartCard) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {chart}
      </CardContent>
    </Card>
  );
}

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
      <h1 className="text-3xl mb-4">Problem page: {params.problemNum}</h1>
      <div className="grid lg:grid-cols-2 gap-4 mb-4">
        <div className="w-full">
          <ChartCard title="Problem Verdicts" />
        </div>
        <div className="w-full">
          <ChartCard title="Submissions overtime" />
        </div>
        <div className="w-full">
          <ChartCard title="Submission by language" />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div>ranklist</div>
        <div>submissions</div>
      </div>
    </section>
  );
};

export default ProblemPage;
