"use client";

import { useRef } from "react";

import { useFetchLiveSubmission } from "@/hooks";
import { DataTable } from "@/components/ui/data-table";
import DataTableLoading from "@/components/ui/data-table/loading";
import { columns } from "@/app/components/data-table/columns";

///////////////////////////////////////////////////////////////////////////////////////////////////

export default function Home() {
  // used for setting the pollId.
  // not using useState, because that will force a re-render every time it's set
  //    then it will fetch the new data, which will set the state, which will render the page
  //    which will refetch the from the server. Causing an infinite loop
  let pollIdRef = useRef(0);
  const { data, isLoading, isError, isSuccess } = useFetchLiveSubmission(pollIdRef.current);

  if (isLoading || !data) {
    return (
      <section>
        <h1 className="text-3xl">Live Submissions</h1>
        <DataTableLoading numColumns={9} numRows={8} />
      </section>
    );
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  if (isSuccess) {
    pollIdRef.current = data[0].msg.sid;
  }

  return (
    <section>
      <h1 className="text-3xl">Live Submissions</h1>
      <DataTable data={data} columns={columns} />
    </section>
  );
}
