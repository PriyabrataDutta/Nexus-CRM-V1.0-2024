export interface HeadCell {
  disablePadding: boolean;
  id: string;
  label: string;
  numeric: boolean;
}

export const headCells: readonly HeadCell[] = [
  {
    id: "customername",
    numeric: false,
    disablePadding: true,
    label: "Customer Name",
  },
  {
    id: "company",
    numeric: false,
    disablePadding: false,
    label: "Company",
  },
  {
    id: "phonenumber",
    numeric: false,
    disablePadding: false,
    label: "Phone Number",
  },
  {
    id: "email",
    numeric: false,
    disablePadding: false,
    label: "Email",
  },
  {
    id: "active",
    numeric: false,
    disablePadding: false,
    label: "Active",
  },
  {
    id: "group",
    numeric: false,
    disablePadding: false,
    label: "Group",
  },
  {
    id: "signupdate",
    numeric: false,
    disablePadding: false,
    label: "Sign-Up Date",
  },
  {
    id: "action",
    numeric: false,
    disablePadding: false,
    label: "Action",
  },
];

export interface Data {
  id: number;
  select: boolean;
  customername: string;
  company: string;
  phonenumber: string;
  email: string;
  active: string;
  group: string;
  signupdate: string;
}

export interface Datatable {
  id?: number;
  select: boolean;
  customername: string;
  company: string;
  phonenumber: string;
  email: string;
  active: boolean;
  group: string;
  signupdate: string;
}

export function createData(
  id: number,
  select: boolean,
  customername: string,
  company: string,
  phonenumber: string,
  email: string,
  active: string,
  group: string,
  signupdate: string
): Data {
  return {
    id,
    select,
    customername,
    company,
    phonenumber,
    email,
    active,
    group,
    signupdate,
  };
}
