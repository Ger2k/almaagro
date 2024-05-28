"use client"

import { ColumnDef } from "@tanstack/react-table"

// Define the shape of your data
export type User = {
  id: number
  first_name: string
  last_name: string
  email: string
}

// Define your columns
export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "first_name",
    header: "Nombre",
  },
  {
    accessorKey: "last_name",
    header: "Apellido",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
]
