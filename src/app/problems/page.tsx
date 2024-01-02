"use client";

import { DataTable } from "@/components/ui/data-table";
import { columns } from "@/app/problems/components/data-table/columns";
import { useFetchProblems } from "@/hooks";

const ProblemsPage = () => {
  const { data, isLoading, isError } = useFetchProblems();

  if (isLoading) {
    return <div>Fetching data </div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  console.log(data)

  return (
  <section>
    <h1 className="text-3xl">All Problems</h1>
    <DataTable columns={columns} data={data} />
  </section>
  )
};

export default ProblemsPage;
