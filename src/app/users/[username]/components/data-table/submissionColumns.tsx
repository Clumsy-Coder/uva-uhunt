"use client";

import { ColumnDef } from "@tanstack/react-table";
import moment from "moment";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DataTableColumnHeader } from "@/components/ui/data-table/column-header";
import { Submission, UserSub } from "@/types";
import { cn } from "@/lib/utils";

export const columns: ColumnDef<UserSub>[] = [
  {
    accessorKey: "submissionId",
    accessorFn: (row) => row.sid,
    meta: {
      // for displaying the columns dropdown
      headerTitle: "Submission ID",
    },
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Submission ID" />;
    },
    cell: ({ row }) => {
      return (
        <Link
          href={`/submissions/${row.getValue("submissionId")}`}
          className="text-primary underline-offset-4 hover:underline py-4 px-1"
        >
          {row.getValue("submissionId")}
        </Link>
      );
    },
  },
  {
    accessorKey: "problemNum",
    accessorFn: (row) => row.pnum,
    meta: {
      // for displaying the columns dropdown
      headerTitle: "Problem Number",
    },
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Problem number" className="whitespace-nowrap" />;
    },
    cell: ({ row }) => {
      return (
        <Link
          href={`/problems/${row.getValue("problemNum")}`}
          className="text-primary underline-offset-4 hover:underline py-4 px-1"
        >
          {row.getValue("problemNum")}
        </Link>
      );
    },
    enableSorting: false,
  },
  {
    accessorKey: "problemTitle",
    accessorFn: (row) => row.pTitle,
    meta: {
      // for displaying the columns dropdown
      headerTitle: "Problem Title",
    },
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Problem Title" className="whitespace-nowrap" />;
    },
    cell: ({ row }) => {
      return (
        <Link
          href={`/problems/${row.original.pnum}`}
          className="text-primary underline-offset-4 hover:underline py-4 px-1"
        >
          {row.getValue("problemTitle")}
        </Link>
      );
    },
    enableSorting: false,
  },
  // {
  //   accessorKey: "username",
  //   accessorFn: (row) => `${row.name} (${row.uname})`,
  //   meta: {
  //     // for displaying the columns dropdown
  //     headerTitle: "User (username)",
  //   },
  //   header: ({ column }) => {
  //     return <DataTableColumnHeader column={column} title="User (username)" />;
  //   },
  //   cell: ({ row }) => {
  //     if (row.original.uname === "--- ? ---") {
  //       return (
  //         <p>{row.original.uname}</p>
  //       )
  //     }
  //     return (
  //       <Link
  //         href={`/users/${row.original.uname}`}
  //         className="text-primary underline-offset-4 hover:underline py-4 px-1"
  //       >
  //         {row.getValue("username")}
  //       </Link>
  //     );
  //   },
  // },
  {
    accessorKey: "verdict",
    accessorFn: (row) => row.verdict.title,
    meta: {
      // for displaying the columns dropdown
      headerTitle: "Verdict",
    },
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Verdict" />;
    },
    cell: ({ row }) => {
      return (
        <Badge
          variant="outline"
          className={cn(
            "rounded-md text-md capitalize whitespace-nowrap",
            row.original.verdict.bgColor,
            row.original.verdict.fgColor,
          )}
        >
          {row.getValue("verdict")}
        </Badge>
      );
    },
    enableSorting: false,
  },
  {
    accessorKey: "language",
    accessorFn: (row) => row.lan,
    meta: {
      // for displaying the columns dropdown
      headerTitle: "Language",
    },
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Language" />;
    },
    cell: ({ row }) => {
      return <p>{row.getValue("language")}</p>;
    },
    enableSorting: false,
  },
  {
    accessorKey: "runtime",
    accessorFn: (row) => row.run,
    meta: {
      // for displaying the columns dropdown
      headerTitle: "Runtime",
    },
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Runtime" />;
    },
    cell: ({ row }) => {
      return <p>{((row.getValue("runtime") as number) / 1000).toFixed(3)}</p>;
    },
    enableSorting: false,
  },
  {
    accessorKey: "rank",
    accessorFn: (row) => row.rank,
    meta: {
      // for displaying the columns dropdown
      headerTitle: "Rank",
    },
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Rank" />;
    },
    cell: ({ row }) => {
      return <p>{row.getValue("rank")}</p>;
    },
    enableSorting: false,
  },
  {
    accessorKey: "submitTime",
    accessorFn: (row) => row.sbt,
    meta: {
      // for displaying the columns dropdown
      headerTitle: "Submit Time",
    },
    header: ({ column }) => {
      return (
        <DataTableColumnHeader
          column={column}
          title="Submit Time"
          className="whitespace-nowrap text-right"
        />
      );
    },
    cell: ({ row }) => {
      return (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <p className="text-right">
                {moment.unix(row.getValue("submitTime")).fromNow()}
              </p>
            </TooltipTrigger>
            <TooltipContent>
              <p>
                Submitted at{" "}
                {moment.unix(row.getValue("submitTime")).toLocaleString()}
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      );
    },
    enableSorting: false,
  },
];

