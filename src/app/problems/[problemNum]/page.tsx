"use client";

import { AxiosError } from "axios";
import { z } from "zod";

import Error from "@/components/error";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  useFetchProblemNum,
  useFetchProblemRanklist,
  useFetchProblemSubmission,
  useFetchSubmissionCount,
  useFetchSubmissionLang,
} from "@/hooks";
import { problemNumSchema } from "@/schema";
import { processProblemNumBarChartData } from "@/utils/dataProcessing";
import ProblemVerdictChart from "@/components/charts/ProblemVerdictChart";
import SubmissionsOvertimeChart from "@/components/charts/SubmissionsOvertimeChart";
import SubmissionLanguageRadarChart from "@/components/charts/SubmissionLanguageRadarChart";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "./components/data-table/ranklistColumns";
import Loading from "./loading";
import Link from "next/link";
import { uhuntViewProblemUrl } from "@/utils/constants";
import { Problem, Submission } from "@/types";

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
  const {
    isLoading: submissionCountIsLoading,
    isSuccess: submissionCountIsSuccess,
    isError: submissionCountIsError,
    data: submissionCountData,
    error: submissionCountError,
  } = useFetchSubmissionCount(params.problemNum);
  const {
    isLoading: submissionLangIsLoading,
    isSuccess: submissionLangIsSuccess,
    isError: submissionLangIsError,
    data: submissionLangData,
    error: submissionLangError,
  } = useFetchSubmissionLang(params.problemNum);
  const {
    isLoading: problemRanklistIsLoading,
    isSuccess: problemRanklistIsSuccess,
    isError: problemRanklistIsError,
    data: problemRanklistData,
    error: problemRanklistError,
  } = useFetchProblemRanklist(params.problemNum);
  const {
    isLoading: problemSubmissionIsLoading,
    isSuccess: problemSubmissionIsSuccess,
    isError: problemSubmissionIsError,
    data: problemSubmissionData,
    error: problemSubmissionError,
  } = useFetchProblemSubmission(params.problemNum);

  if (
    problemNumIsLoading ||
    submissionCountIsLoading ||
    submissionLangIsLoading ||
    problemRanklistIsLoading ||
    problemSubmissionIsLoading
  ) {
    return <Loading />;
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
    // console.log(problemNumData);
  }

  const processedProblemVerdictData = processProblemNumBarChartData( problemNumData as Problem);
  return (
    <section>
      <Link
        href={uhuntViewProblemUrl(( problemNumData as Problem ).pid)}
        className="text-3xl hover:underline"
        target="_blank"
      >
        {params.problemNum}: {( problemNumData as Problem ).title}
      </Link>
      <div className="grid lg:grid-cols-2 gap-4 mb-4 mt-4">
        {/* Submission verdicts bar chart  */}
        <div className="w-full">
          <Card>
            <CardHeader>
              <CardTitle>Submission Verdicts</CardTitle>
            </CardHeader>
            <CardContent className="h-[400px]">
              <ProblemVerdictChart data={processedProblemVerdictData} />
            </CardContent>
          </Card>
        </div>
        {/* Submissions overtime line chart */}
        <div className="w-full">
          <Card>
            <CardHeader>
              <CardTitle>Submissions overtime</CardTitle>
            </CardHeader>
            <CardContent className="h-[400px]">
              <SubmissionsOvertimeChart data={submissionCountData} />
            </CardContent>
          </Card>
        </div>
        <div className="w-full">
          <Card>
            <CardHeader>
              <CardTitle>Submissions by language</CardTitle>
            </CardHeader>
            <CardContent className="h-[400px]">
              <SubmissionLanguageRadarChart data={submissionLangData} />
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <h1 className="text-3xl mb-4 mt-6">Ranklist (Top 10)</h1>
          <DataTable
            columns={columns}
            data={problemRanklistData as Submission['msg'][]}
            height={400}
          />
        </div>
        <div>
          <h1 className="text-3xl mb-4 mt-6">Submissions</h1>
          <DataTable
            columns={columns}
            data={problemSubmissionData as Submission['msg'][]}
            height={400}
          />
        </div>
      </div>
    </section>
  );
};

export default ProblemPage;
