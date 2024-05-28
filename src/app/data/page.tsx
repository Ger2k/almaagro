import { columns } from "./columns"
import { DataTable } from "./data-table"
import { User } from "./columns"

async function getData(): Promise<User[]> {
  const response = await fetch('https://reqres.in/api/users')
  const data = await response.json()
  return data.data
}

export default async function UsersPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
