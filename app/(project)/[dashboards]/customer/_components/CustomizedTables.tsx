"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    fontSize: "1rem",
    fontWeight: 600,
    lineHeight: "1.4rem",
    fontFamily: "Poppins",
    color: "#000000",
    padding: "1rem 1.3rem",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: "1rem",
    fontWeight: 300,
    lineHeight: "1.4rem",
    fontFamily: "Poppins",
    color: "#000000",
    padding: "1rem 1.3rem",
  },
  border: "none",
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    border: 0,
  },
  "&:nth-of-type(even)": {
    border: 0,
  },
  backgroundColor: "white",
  ":hover": {
    backgroundColor: "#EAEAEA",
  },
}));

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function CustomizedTables() {
  return (
    <TableContainer
      sx={{ border: "none", boxShadow: "none", backgroundColor: "#fff0" }}
      component={Paper}
    >
      <Table
        sx={{
          borderCollapse: "separate",
          backgroundColor: "none",
          "&.MuiTable-root": {
            borderSpacing: "0px 8px !important",
            border: "none !important",
          },
        }}
        aria-label="customized table"
      >
        <TableHead>
          <TableRow sx={{ backgroundColor: "#EAEAEA" }}>
            <StyledTableCell>Dessert (100g serving)</StyledTableCell>
            <StyledTableCell align="left">Calories</StyledTableCell>
            <StyledTableCell align="left">Fat&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="left">Carbs&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="left">Protein&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="left">Protein&nbsp;(g)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="left">{row.calories}</StyledTableCell>
              <StyledTableCell align="left">{row.fat}</StyledTableCell>
              <StyledTableCell align="left">{row.carbs}</StyledTableCell>
              <StyledTableCell align="left">{row.protein}</StyledTableCell>
              <StyledTableCell align="left">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
