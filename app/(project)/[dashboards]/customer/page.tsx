"use client";
import { Box, Button, FormControlLabel, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import NewCustomerDrawerLeft from "./_components/NewCustomerDrawerLeft";
import CustomerList from "./CustomerList";
import { useEffect, useState } from "react";
import { Data, Datatable } from "./_components/typevalidation/cutomerlist";
import SwitchButton from "./_components/button/SwitchButton";
import SelectButton from "./_components/button/SelectButton";
import Addtask from "./_components/button/Addtask";
import Edit from "./_components/task/Edit";

export default function Home() {
  const [addtask, setAddtask] = useState<{
    addmode: boolean;
    editmode: number | undefined;
  }>({
    addmode: false,
    editmode: undefined,
  });

  const [data, setData] = useState<Datatable>({
    select: false,
    customername: "",
    company: "",
    phonenumber: "",
    email: "",
    active: false,
    group: "",
    signupdate: "",
  });

  const [rows, setRows] = useState<any[]>([]);
  console.log(rows);

  useEffect(() => {
    const update: any = rows.map((elem, i) => {
      const updatedElem: any = { ...elem };

      Object.keys(elem).forEach((key: any) => {
        if (key == "active" && elem.active == undefined) {
          updatedElem[key] = {
            value: false,
            component: (
              <FormControlLabel
                control={
                  <SwitchButton id={elem.id} rows={rows} setRows={setRows} />
                }
                label=""
              />
            ),
          };
        }
        if (key == "group" && elem.active == undefined) {
          updatedElem[key] = {
            value: false,
            component: <SelectButton />,
          };
        }
      });

      return updatedElem;
    });
    setRows(update);
  }, [addtask]);

  return (
    <>
      <Box
        sx={{
          padding: "10px",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* <Typography
          fontSize="1.2rem"
          fontFamily="Poppins"
          fontWeight="400"
          lineHeight="30px"
          component="h6"
          marginBottom="6px"
        >
          Customer name
        </Typography> */}
        {addtask.addmode && (
          <>
            <Typography
              sx={{
                fontSize: "1.2rem",
                fontWeight: 400,
                fontFamily: "Poppins",
                lineHeight: "30px",
                letterSpacing: "1%",
                marginBottom: "0.8rem",
              }}
            >
              Customer Summery
            </Typography>
            <NewCustomerDrawerLeft
              data={data}
              setData={setData}
              setRows={setRows}
              rows={rows}
              addtask={addtask}
              setAddtask={setAddtask}
            />
          </>
        )}
        {!addtask.addmode && (
          <Box
            padding={2}
            sx={{
              backgroundColor: "white",
              height: "100%",
              overflow: "scroll",
            }}
          >
            <Addtask name="+ New Customer" setAddtask={setAddtask} />
            <Divider />

            <CustomerList
              data={data}
              setData={setData}
              setRows={setRows}
              rows={rows}
              addtask={addtask}
              setAddtask={setAddtask}
            />
          </Box>
        )}
        {/* <ReactVirtualizedTable /> */}
        {/* <DataTable /> */}
      </Box>
    </>
  );
}
