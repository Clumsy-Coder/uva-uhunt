"use client"

import { ColumnDef } from "@tanstack/react-table"
import moment from "moment";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { DataTableColumnHeader } from "@/components/ui/data-table/column-header";
import { Submission } from "@/types"
import { cn } from "@/lib/utils";

export const columns: ColumnDef<Submission>[] = [
  {
    accessorKey: "submissionId",
    accessorFn: row => row.msg.sid,
    meta: {
      // for displaying the columns dropdown
      headerTitle: "Submission ID"
    },
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
    meta: {
      // for displaying the columns dropdown
      headerTitle: "Problem Number"
    },
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
    meta: {
      // for displaying the columns dropdown
      headerTitle: "Problem Title"
    },
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
    meta: {
      // for displaying the columns dropdown
      headerTitle: "User (username)"
    },
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
    meta: {
      // for displaying the columns dropdown
      headerTitle: "Verdict"
    },
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
    meta: {
      // for displaying the columns dropdown
      headerTitle: "Language"
    },
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
    enableSorting: false,
  },
  {
    accessorKey: "runtime",
    accessorFn: row => row.msg.run,
    meta: {
      // for displaying the columns dropdown
      headerTitle: "Runtime"
    },
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
    enableSorting: false,
  },
  {
    accessorKey: "rank",
    accessorFn: row => row.msg.rank,
    meta: {
      // for displaying the columns dropdown
      headerTitle: "Rank"
    },
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
    enableSorting: false,
  },
  {
    accessorKey: "submitTime",
    accessorFn: row => row.msg.sbt,
    meta: {
      // for displaying the columns dropdown
      headerTitle: "Submit Time"
    },
    header: ({ column }) => {
      return (
        <DataTableColumnHeader column={column} title="Submit Time" className="whitespace-nowrap text-right" />
      );
    },
    cell: ({ row }) => {
      return (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <p className="text-right">
                {moment.unix(row.getValue('submitTime')).fromNow()}
              </p>
            </TooltipTrigger>
            <TooltipContent>
              <p>Submitted at {moment.unix(row.getValue('submitTime')).toLocaleString()}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      );
    },
    enableSorting: false,
  },
]
