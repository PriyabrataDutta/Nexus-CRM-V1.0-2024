import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NoteIcon from "@mui/icons-material/Note";
import DescriptionIcon from "@mui/icons-material/Description";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PaymentIcon from "@mui/icons-material/Payment";
import LockIcon from "@mui/icons-material/Lock";
import ReceiptIcon from "@mui/icons-material/Receipt";

interface CustomerPage {
  page: string;
  icon: JSX.Element;
}

export const newCustomerList: CustomerPage[] = [
  {
    page: "Profile",
    icon: <AccountCircleIcon />,
  },
  {
    page: "Notes",
    icon: <NoteIcon />,
  },
  {
    page: "Quotation",
    icon: <DescriptionIcon />,
  },
  {
    page: "Sales",
    icon: <ShoppingCartIcon />,
  },
  {
    page: "Invoices",
    icon: <ReceiptIcon />,
  },
  {
    page: "Payments",
    icon: <PaymentIcon />,
  },
  {
    page: "Vault",
    icon: <LockIcon />,
  },
];
