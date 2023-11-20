import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/registry/new-york/ui/checkbox";
import { DataTableColumnHeader } from "./data-table-column-header";

export const columns: ColumnDef<Task>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  // ... other existing columns like 'id', 'title', 'status', etc. ...
  {
    accessorKey: "student",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Student" />
    ),
    cell: ({ row }) => <div>{row.getValue("student")}</div>,
  },
  {
    accessorKey: "year",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Year" />
    ),
    cell: ({ row }) => <div>{row.getValue("year")}</div>,
  },
  {
    accessorKey: "semester",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Semester" />
    ),
    cell: ({ row }) => <div>{row.getValue("semester")}</div>,
  },
  {
    accessorKey: "supervisor",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Supervisor" />
    ),
    cell: ({ row }) => <div>{row.getValue("supervisor")}</div>,
  },
  {
    accessorKey: "keyWord",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Key Word" />
    ),
    cell: ({ row }) => <div>{row.getValue("keyWord")}</div>,
  },
  {
    accessorKey: "rating",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Rating" />
    ),
    cell: ({ row }) => <div>{row.getValue("rating")}</div>,
  },
  // ... any additional columns ...
];
