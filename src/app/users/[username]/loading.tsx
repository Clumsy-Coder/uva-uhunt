import Loading from "@/components/ui/data-table/loading";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const UsernameLoading = () => {
  return (
    <section>
      <Skeleton className="h-8 w-[400px] mb-5" />
      <div className="grid lg:grid-cols-2 gap-4 mb-4">
        {[...Array(4)].map((cur, index) => (
          <div key={`user-loading-${index}`} className="w-full">
            {" "}
            <Skeleton className="h-[474px]" />{" "}
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <Skeleton className="h-8 w-[224px] mb-4 mt-8" />
          <Loading numRows={8} />
        </div>
      </div>
    </section>
  );
};

export default UsernameLoading;
