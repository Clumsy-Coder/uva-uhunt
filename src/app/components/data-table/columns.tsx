"use client"

import { ColumnDef } from "@tanstack/react-table"
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { DataTableColumnHeader } from "@/components/ui/data-table/column-header";
import { Submission } from "@/types"

export const columns: ColumnDef<Submission>[] = [
  {
    accessorKey: "submissionId",
    accessorFn: row => row.msg.sid,
    // meta: {
    //   headerTitle: "Submission ID"
    // },
    header: ({ column }) => {
      return (
        <DataTableColumnHeader column={column} title="Submission ID" />
      );
    },
    cell: ({ row }) => {
      return (
        <Link href={`/submissions/${row.getValue("submissionId")}`} className={buttonVariants({variant: 'outline'})}>
          {row.getValue("submissionId")}
        </Link>
      );
    },
  },
  {
    accessorKey: "problemNum",
    accessorFn: row => row.msg.pnum,
    header: ({ column }) => {
      return (
        <DataTableColumnHeader column={column} title="Problem number" />
      );
    },
    cell: ({ row }) => {
      return (
        <Link href={`/problems/${row.getValue("problemNum")}`} className={buttonVariants({variant: 'outline'})}>
          {row.getValue("problemNum")}
        </Link>
      );
    },
  },
]

