"use client";

import { AxiosError } from "axios";
import { z } from "zod";

import Error from "@/components/error";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { userSchema } from "@/schema";
import SubmissionVerdictChart from "@/components/charts/ProblemVerdictChart";
import {
  useFetchUserSubmissionAttempted,
  useFetchUserSubmissionLanguage,
  useFetchUserSubmissionOvertime,
  useFetchUserSubmissions,
  useFetchUserSubmissionVerdict,
} from "@/hooks";
import {
  SubmissionLangType,
  SubmissionSovledVsAttempted,
  SubmissionsOvertimeLineChartType,
  UserSubmission,
  UserSubmissionBarChartType,
} from "@/types";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "@/app/users/[username]/components/data-table/submissionColumns";
import SubmissionLanguageRadarChart from "@/components/charts/SubmissionLanguageRadarChart";
import SubmissionsOvertimeChart from "@/components/charts/SubmissionsOvertimeChart";
import SolvedVsAttemptedDonutChart from "@/components/charts/SolvedVsAttemptedDonutChart";
import Loading from "./loading";

type Props = {
  params: z.infer<typeof userSchema>;
};

const UserPage = ({ params }: Props) => {
  const {
    isFetching: userSubmissionIsFetching,
    isError:    userSubmissionIsError,
    data:       userSubmissionData,
    error:      userSubmissionError,
  } = useFetchUserSubmissions(params.username);
  const {
    isFetching: userSubmissionVerdictIsFetching,
    data:       userSubmissionVerdictData,
  } = useFetchUserSubmissionVerdict(params.username);
  const {
    isFetching: userSubmissionLanguageIsFetching,
    data:       userSubmissionLanguageData,
  } = useFetchUserSubmissionLanguage(params.username);
  const {
    isFetching: userSubmissionOvertimeIsFetching,
    data:       userSubmissionOvertimeData,
  } = useFetchUserSubmissionOvertime(params.username);
  const {
    isFetching: userSubmissionAttemptedIsFetching,
    data:       userSubmissionAttemptedData,
  } = useFetchUserSubmissionAttempted(params.username);

  if (
    userSubmissionIsFetching ||
    userSubmissionVerdictIsFetching ||
    userSubmissionLanguageIsFetching ||
    userSubmissionOvertimeIsFetching ||
    userSubmissionAttemptedIsFetching
  ) {
    return <Loading />;
  }

  if (userSubmissionIsError) {
    type ErrorMessage = {
      message: string;
    };

    const status = (userSubmissionError as AxiosError<ErrorMessage>).response?.status;
    const message = (userSubmissionError as AxiosError<ErrorMessage>).response?.data.message;

    return (
      <Error
        status={status as number}
        message={ message }
      />
    );
  }

  return (
    <section>
      <div>
        <h1 className="text-3xl">
          {userSubmissionData?.name} ({params.username})
        </h1>
      </div>
      <div className="grid lg:grid-cols-2 gap-4 mb-4 mt-4">
        <div className="w-full">
          <Card>
            <CardHeader>
              <CardTitle>Submission Verdicts</CardTitle>
            </CardHeader>
            <CardContent className="h-[400px]">
              <SubmissionVerdictChart
                data={userSubmissionVerdictData as UserSubmissionBarChartType[]}
              />
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
              <SubmissionsOvertimeChart
                data={ userSubmissionOvertimeData as SubmissionsOvertimeLineChartType[] }
              />
            </CardContent>
          </Card>
        </div>
        {/* Submissions language using radar chart */}
        <div className="w-full">
          <Card>
            <CardHeader>
              <CardTitle>Submissions by language</CardTitle>
            </CardHeader>
            <CardContent className="h-[400px]">
              <SubmissionLanguageRadarChart
                data={userSubmissionLanguageData as SubmissionLangType[]}
              />
            </CardContent>
          </Card>
        </div>
        {/* Problem solved vs attempted with donut chart */}
        <div className="w-full">
          <Card>
            <CardHeader>
              <CardTitle>Solved problems vs Problem submissions</CardTitle>
            </CardHeader>
            <CardContent className="h-[400px]">
              <SolvedVsAttemptedDonutChart
                data={userSubmissionAttemptedData as SubmissionSovledVsAttempted[]}
              />
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <div>
            <h1 className="text-3xl mb-4 mt-6">Submissions</h1>
            <DataTable
              columns={columns}
              data={(userSubmissionData as UserSubmission).subs}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserPage;
