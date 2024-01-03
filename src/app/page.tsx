"use client";

import { useRef } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from '@/components/ui/skeleton'

import { useFetchLiveSubmission } from "@/hooks";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "@/app/components/data-table/columns";

const Loading = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Submission ID</TableHead>
          <TableHead>Problem number</TableHead>
          <TableHead>Problem title</TableHead>
          <TableHead>User (username)</TableHead>
          <TableHead className="text-center">Verdict</TableHead>
          <TableHead>Language</TableHead>
          <TableHead>Time</TableHead>
          <TableHead>Rank</TableHead>
          <TableHead className="text-right">Submit time</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {[...Array(10)].map((_, i) => {
          return (
            <TableRow key={`row-${i}`}>
              {[...Array(9)].map((_, k) => (
                <TableCell key={`row-${i}-cell-${k}`}>
                  <Skeleton className="w-full h-4" />
                </TableCell>
              ))}
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}

///////////////////////////////////////////////////////////////////////////////////////////////////

export default function Home() {
  // used for setting the pollId.
  // not using useState, because that will force a re-render every time it's set
  //    then it will fetch the new data, which will set the state, which will render the page
  //    which will refetch the from the server. Causing an infinite loop
  let pollIdRef = useRef(0);
  const { data, isLoading, isError, isSuccess } = useFetchLiveSubmission(pollIdRef.current);

  if (isLoading || !data) {
    return <Loading />
;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  if (isSuccess) {
    pollIdRef.current = data[0].msg.sid;
  }

  return (
    <div>
      <DataTable data={data} columns={columns} />
    </div>
  );
}
