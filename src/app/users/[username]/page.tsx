"use client";

import { AxiosError } from "axios";
import { z } from "zod";

import Error from "@/components/error";
import { userSchema } from "@/schema";
import { useFetchUserSubmissions } from "@/hooks";
import { processUserSubmissionsVerdictBarChart } from "@/utils/dataProcessing";
import { UserSubmission } from "@/types";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "@/app/users/[username]/components/data-table/submissionColumns";

type Props = {
  params: z.infer<typeof userSchema>;
};

const UserPage = ({ params }: Props) => {
  const {
    isLoading: userSubmissionIsLoading,
    isSuccess: userSubmissionIsSuccess,
    isError: userSubmissionIsError,
    data: userSubmissionData,
    error: userSubmissionError,
  } = useFetchUserSubmissions(params.username);

  if (userSubmissionIsLoading) {
    return <div>Loading {params.username}</div>;
  }

  if(userSubmissionIsError) {
    type ErrorMessage = {
      message: string;
    }

    const status = (userSubmissionError as AxiosError<ErrorMessage>).response?.status
    const message = (userSubmissionError as AxiosError<ErrorMessage>).response?.data.message

    return (
      <Error
        status={status as number}
        message={ message }
      />
    );
  }

  // process data
  // const userSubmissionVerdicts = processUserSubmissionsVerdictBarChart((userSubmissionData as UserSubmission).subs)
  // console.log(userSubmissionVerdicts)

  return (
    <section>
      <div>
        <h1 className="text-3xl">{userSubmissionData?.name} ({params.username})</h1>
      </div>
      <div>
        <div></div>
        <div>
          <div>
            <h1 className="text-3xl mb-4 mt-6">Submissions</h1>
            <DataTable columns={columns} data={( userSubmissionData as UserSubmission ).subs} height={400} />
          </div>
        </div>
      </div>
    </section>
  )
};

export default UserPage;
