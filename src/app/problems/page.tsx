"use client";

import { DataTable } from "@/components/ui/data-table";
import DataTableLoading from "@/components/ui/data-table/loading";
import { columns } from "@/app/problems/components/data-table/columns";
import { useFetchProblems } from "@/hooks";
import { Problem } from "@/types";

const ProblemsPage = () => {
  const { data, isLoading, isError } = useFetchProblems();

  if (isLoading) {
    return (
      <section>
        <h1 className="text-3xl">All Problems</h1>
        <DataTableLoading numColumns={2} numRows={8} />
      </section>
    );
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  return (
    <section>
      <h1 className="text-3xl">All Problems</h1>
      <DataTable columns={columns} data={data as Problem[]} />
    </section>
  );
};

export default ProblemsPage;
