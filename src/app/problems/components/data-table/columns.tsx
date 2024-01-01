"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import Link from "next/link";

import { Button } from "@/components/ui/button"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  num: string
  title: string
}

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "num",
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
        <div className="hover:underline">
          <Link
            href={`/problems/${row.getValue("num")}`}
            className="p-3"
          >
            {row.getValue("num")}
          </Link>
        </div>
      )
    },
  },
  {
    accessorKey: "title",
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
        <div className="hover:underline">
          <Link
            href={`/problems/${row.getValue("num")}`}
            className="p-3"
          >
            {row.getValue("title")}
          </Link>
        </div>
      )
    },
  },
]

