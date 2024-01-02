"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import Link from "next/link";

import { Button, buttonVariants } from "@/components/ui/button";
import { Problem } from "@/types";

export const columns: ColumnDef<Problem>[] = [
  {
    accessorKey: "num",
    meta: {
      headerTitle: "Problem number"
    },
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Problem number
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
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
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Problem Title
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
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
