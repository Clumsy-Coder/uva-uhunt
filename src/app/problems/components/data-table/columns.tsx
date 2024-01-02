"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import Link from "next/link";

import { Button, buttonVariants } from "@/components/ui/button";
import { DataTableColumnHeader } from "@/components/ui/data-table/column-header";
import { Problem } from "@/types";

export const columns: ColumnDef<Problem>[] = [
  {
    accessorKey: "num",
    meta: {
      headerTitle: "Problem number"
    },
    header: ({ column }) => {
      return (
        <DataTableColumnHeader column={column} title="Problem Number" />
      );
    },
    cell: ({ row }) => {
      return (
        <Link href={`/problems/${row.getValue("num")}`} className={buttonVariants({variant: 'outline'})}>
          {row.getValue("num")}
        </Link>
      );
    },
  },
  {
    accessorKey: "title",
    meta: {
      headerTitle: "Problem title"
    },
    header: ({ column }) => {
      return (
        <DataTableColumnHeader column={column} title="Problem Title" />
      );
    },
    cell: ({ row }) => {
      return (
        <Link href={`/problems/${row.getValue("num")}`} className={buttonVariants({variant: 'outline'})}>
          {row.getValue("title")}
        </Link>
      );
    },
  },
];
