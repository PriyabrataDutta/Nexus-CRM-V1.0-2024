export interface Data {
  id: number;
  select: boolean;
  description: string;
  tablehead: string;
}

export interface Datatable {
  select: boolean;
  tittle: string;
  description: string;
}

export type Order = "asc" | "desc";

export interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
  headCells: any;
}

export interface HeadCell {
  disablePadding: boolean;
  id: string;
  label: string;
  numeric: boolean;
}

export const headCells: readonly HeadCell[] = [
  {
    id: "tablehead",
    numeric: false,
    disablePadding: true,
    label: "Tittle",
  },
  {
    id: "description",
    numeric: false,
    disablePadding: false,
    label: "Description",
  },
  {
    id: "action",
    numeric: false,
    disablePadding: false,
    label: "Action",
  },
];

export function createData(
  id: number,
  select: boolean,
  tablehead: string,
  description: string
): Data {
  return {
    id,
    select,
    tablehead,
    description,
  };
}
