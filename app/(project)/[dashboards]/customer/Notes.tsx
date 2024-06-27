import React, { useEffect } from "react";
import DataTable from "./_components/DataTable";
import { Datatable, headCells } from "./_components/typevalidation/notes";
import { Box, styled } from "@mui/material";
import Addtask from "./_components/button/Addtask";
import NotesAddtask from "./_components/NotesAddtask";

function Notes() {
  const [rows, setRows] = React.useState<Date[]>([]);
  const [addtask, setAddtask] = React.useState<{
    addmode: boolean;
    editmode: number | undefined;
  }>({
    addmode: false,
    editmode: undefined,
  });
  const [data, setData] = React.useState<Datatable>({
    select: false,
    tittle: "",
    description: "",
  });

  function edit(id: number) {
    function editRows(
      id: number,
      setAddtask: React.Dispatch<
        React.SetStateAction<{ addmode: boolean; editmode: number | undefined }>
      >,
      rows: any[],
      setData: React.Dispatch<React.SetStateAction<Datatable>>
    ) {
      const update = rows.find((elem) => elem.id === id);
      if (update) {
        setAddtask({ addmode: true, editmode: id });
        setData({
          select: update.select,
          tittle: update.tablehead,
          description: update.description,
        });
      }
    }
    editRows(id, setAddtask, rows, setData);
  }

  return (
    <>
      <Box
        sx={{
          position: "relative",
          height: "100%",
        }}
      >
        {addtask.addmode && (
          <NotesAddtask
            setRows={setRows}
            rows={rows}
            setAddtask={setAddtask}
            data={data}
            setData={setData}
            addtask={addtask}
          />
        )}
        <Box>
          <Box
            width="100%"
            height="100%"
            sx={{ display: "flex", justifyContent: "right" }}
          >
            <Addtask name="+ Add" setAddtask={setAddtask} />
          </Box>
          <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            <DataTable
              headCells={headCells}
              rows={rows}
              setAddtask={setAddtask}
              edit={edit}
              data={data}
              setData={setData}
              setRows={setRows}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Notes;
