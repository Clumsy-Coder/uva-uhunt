"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  num: string
  title: string
}

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "num",
    header: "Problem number",
  },
  {
    accessorKey: "title",
    header: "Problem title",
  },
]

