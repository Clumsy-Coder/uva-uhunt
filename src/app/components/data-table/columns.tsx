"use client"

import { ColumnDef } from "@tanstack/react-table"
import moment from "moment";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { DataTableColumnHeader } from "@/components/ui/data-table/column-header";
import { Submission } from "@/types"
import { cn } from "@/lib/utils";

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
        <Link href={`/submissions/${row.getValue("submissionId")}`} className="text-primary underline-offset-4 hover:underline">
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
        <Link href={`/problems/${row.getValue("problemNum")}`} className="text-primary underline-offset-4 hover:underline">
          {row.getValue("problemNum")}
        </Link>
      );
    },
  },
  {
    accessorKey: "problemTitle",
    accessorFn: row => row.msg.pTitle,
    header: ({ column }) => {
      return (
        <DataTableColumnHeader column={column} title="Problem Title" />
      );
    },
    cell: ({ row }) => {
      return (
        <Link href={`/problems/${row.original.msg.pnum}`} className="text-primary underline-offset-4 hover:underline">
          {row.getValue("problemTitle")}
        </Link>
      );
    },
  },
  {
    accessorKey: "username",
    accessorFn: row => `${row.msg.name} (${row.msg.uname})`,
    header: ({ column }) => {
      return (
        <DataTableColumnHeader column={column} title="User (username)" />
      );
    },
    cell: ({ row }) => {
      return (
        <Link href={`/users/${row.original.msg.uname}`} className="text-primary underline-offset-4 hover:underline">
          {row.getValue("username")}
        </Link>
      );
    },
  },
  {
    accessorKey: "verdict",
    accessorFn: row => row.msg.verdict.title,
    header: ({ column }) => {
      return (
        <DataTableColumnHeader column={column} title="Verdict" />
      );
    },
    cell: ({ row }) => {
      return (
        <Badge
          variant="outline"
          className={cn(
            'rounded-md text-md capitalize whitespace-nowrap',
            row.original.msg.verdict.bgColor,
            row.original.msg.verdict.fgColor,
          )}
        >
          {row.getValue("verdict")}
        </Badge>
      );
    },
  },
  {
    accessorKey: "language",
    accessorFn: row => row.msg.lan,
    header: ({ column }) => {
      return (
        <DataTableColumnHeader column={column} title="Language" />
      );
    },
    cell: ({ row }) => {
      return (
        <p>
          {row.getValue("language")}
        </p>
      );
    },
  },
  {
    accessorKey: "runtime",
    accessorFn: row => row.msg.run,
    header: ({ column }) => {
      return (
        <DataTableColumnHeader column={column} title="Runtime" />
      );
    },
    cell: ({ row }) => {
      return (
        <p>
          {(row.getValue('runtime') as number / 1000).toFixed(3)}
        </p>
      );
    },
  },
  {
    accessorKey: "rank",
    accessorFn: row => row.msg.rank,
    header: ({ column }) => {
      return (
        <DataTableColumnHeader column={column} title="Rank" />
      );
    },
    cell: ({ row }) => {
      return (
        <p>
          {row.getValue('rank')}
        </p>
      );
    },
  },
  {
    accessorKey: "submitTime",
    accessorFn: row => row.msg.sbt,
    header: ({ column }) => {
      return (
        <DataTableColumnHeader column={column} title="Submit Time" className="whitespace-nowrap text-right" />
      );
    },
    cell: ({ row }) => {
      return (
        <p className="text-right">
          {moment.unix(row.getValue('submitTime')).fromNow()}
        </p>
      );
    },
  },
]
