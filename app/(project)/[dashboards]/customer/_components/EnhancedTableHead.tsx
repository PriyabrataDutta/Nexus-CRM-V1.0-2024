"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Checkbox from "@mui/material/Checkbox";
import { visuallyHidden } from "@mui/utils";
import { Data, EnhancedTableProps, Order } from "./typevalidation/notes";

function EnhancedTableHead(props: EnhancedTableProps) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
    headCells,
  } = props;
  const createSortHandler =
    (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow sx={{ padding: "0px", backgroundColor: "#EAEAEA" }}>
        <TableCell
          sx={{
            border: "none",
          }}
          align="left"
          padding="checkbox"
        >
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
            sx={{
              fontSize: "1rem",
              fontWeight: 600,
              lineHeight: "1.4rem",
              fontFamily: "Poppins",
              color: "#000000",
              padding: "0.8rem",
            }}
          />
        </TableCell>
        {headCells.map((headCell: any) => (
          <TableCell
            sx={{ padding: "0px", border: "none" }}
            key={headCell.id}
            align={headCell.numeric ? "left" : "left"}
            // padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
              sx={{
                fontSize: "1rem",
                fontWeight: 600,
                lineHeight: "1.4rem",
                fontFamily: "Poppins",
                color: "#000000",
                padding: "0.8rem",
                border: "none",
              }}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
export default EnhancedTableHead;
