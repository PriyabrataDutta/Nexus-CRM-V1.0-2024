"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { styled } from "@mui/material/styles";
import EditIcon from "@mui/icons-material/Edit";
import EnhancedTableHead from "./EnhancedTableHead";
import EnhancedTableToolbar from "./EnhancedTableToolbar";
import { Data, Datatable, Order } from "./typevalidation/notes";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  fontSize: "1rem",
  fontWeight: 300,
  lineHeight: "1.4rem",
  fontFamily: "Poppins",
  color: "#000000",
  padding: "0.8rem",
  border: "none",
}));

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string }
) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(
  array: readonly T[],
  comparator: (a: T, b: T) => number
) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

export default function EnhancedTable({
  headCells,
  rows,
  setAddtask,
  edit,
  setRows,
}: {
  headCells: any;
  rows: any;
  setAddtask: React.Dispatch<
    React.SetStateAction<{ addmode: boolean; editmode: number | undefined }>
  >;
  edit?: any;
  data: any;
  setData: React.Dispatch<React.SetStateAction<any>>;
  setRows: React.Dispatch<React.SetStateAction<any>>;
}) {
  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState<keyof Data>("description");
  const [selected, setSelected] = React.useState<readonly number[]>([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = rows.map((n: any) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleClick = (event: React.MouseEvent<unknown>, id: number) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: readonly number[] = [];

    const update: any = rows.map((elem: any) => {
      if (id == elem.id) {
        return {
          ...elem,
          select: !elem.select,
        };
      }
      return elem;
    });

    setRows(update);

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDense(event.target.checked);
  };

  const isSelected = (id: number) => selected.indexOf(id) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [order, orderBy, page, rowsPerPage, rows]
  );

  const getPadding = (value: any) => {
    return typeof value === "string" ? "0.8rem" : "0.2rem 0.8rem";
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Paper
        sx={{
          width: "100%",
          border: "none",
          boxShadow: "none",
          "&.MuiPaper-root": {
            backgroundColor: "#fff0",
          },
        }}
      >
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            sx={{
              borderCollapse: "separate",
              "&.MuiTable-root": {
                borderSpacing: "0px 8px !important",
                border: "none !important",
              },
              minWidth: "750px",
              marginTop: "-8px",
            }}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
              headCells={headCells}
            />
            <TableBody>
              {visibleRows.map((row: any, index) => {
                const isItemSelected = isSelected(index);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    // onClick={(event) => handleClick(event, row.id)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                    sx={{ cursor: "pointer", backgroundColor: "white" }}
                  >
                    <StyledTableCell
                      sx={{ padding: "0px 0px 0px 4px" }}
                      padding="checkbox"
                    >
                      <Checkbox
                        color="primary"
                        inputProps={{
                          "aria-label": "select all desserts",
                        }}
                        checked={row.select}
                        onClick={(event) => handleClick(event, row.id)}
                        sx={{
                          fontSize: "1rem",
                          fontWeight: 600,
                          lineHeight: "1.4rem",
                          fontFamily: "Poppins",
                          color: "#000000",
                          padding: "0.8rem",
                        }}
                      />
                    </StyledTableCell>
                    {Object.keys(row)
                      .slice(2, Object.keys(row).length)
                      .map((key, index) => {
                        return (
                          <StyledTableCell
                            key={index}
                            component="th"
                            id={labelId}
                            scope="row"
                            sx={{
                              padding: getPadding(row[key]),
                            }}
                          >
                            {typeof row[key] == "object"
                              ? row[key].component
                              : row[key]}
                          </StyledTableCell>
                        );
                      })}
                    <StyledTableCell sx={{ padding: "0px" }} align="left">
                      <IconButton
                        onClick={() => {
                          edit(row.id);
                        }}
                        color="primary"
                        aria-label="edit"
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        onClick={() => {
                          const update = rows.filter((elem: any) => {
                            return row.id !== elem?.id;
                          });
                          setRows(update);
                        }}
                        color="secondary"
                        aria-label="delete"
                      >
                        <DeleteIcon sx={{ color: "red" }} />
                      </IconButton>
                    </StyledTableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      {/* <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      /> */}
    </Box>
  );
}
