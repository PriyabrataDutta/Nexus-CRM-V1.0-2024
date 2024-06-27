"use client";
import React, { Fragment } from "react";
import DataTable from "./_components/DataTable";
import { Datatable, headCells } from "./_components/typevalidation/cutomerlist";
import Edit from "./_components/task/Edit";

function CustomerList({
  addtask,
  setRows,
  rows,
  setAddtask,
  data,
  setData,
}: {
  setRows: React.Dispatch<React.SetStateAction<any[]>>;
  rows: any;
  setAddtask: React.Dispatch<
    React.SetStateAction<{ addmode: boolean; editmode: number | undefined }>
  >;
  data: Datatable;
  addtask: any;
  setData: React.Dispatch<React.SetStateAction<Datatable>>;
}) {
  function editData(id: number) {
    Edit(id, rows, setData, setAddtask);
  }
  return (
    <React.Fragment>
      <DataTable
        headCells={headCells}
        rows={rows}
        setAddtask={setAddtask}
        data={data}
        setData={setData}
        setRows={setRows}
        edit={editData}
      />
    </React.Fragment>
  );
}

export default CustomerList;
