"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useParams } from "next/navigation";
import { newCustomerList } from "@/utils/dashboards/new-customer-list";
import ContactformCustomer from "./ContactformCustomer";
import DataTable from "./DataTable";
import Notes from "../Notes";
import { Datatable } from "./typevalidation/cutomerlist";

const drawerWidth = 252;

export default function NewCustomerDrawerLeft({
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
  const params = useParams();
  const [service, setService] = React.useState(
    newCustomerList[0].page.toLowerCase()
  );

  const renderComponent = () => {
    switch (service) {
      case "profile":
        return (
          <ContactformCustomer
            data={data}
            setData={setData}
            setRows={setRows}
            rows={rows}
            addtask={addtask}
            setAddtask={setAddtask}
          />
        );
      case "notes":
        return <Notes />;
      default:
        return (
          <ContactformCustomer
            data={data}
            setData={setData}
            setRows={setRows}
            rows={rows}
            addtask={addtask}
            setAddtask={setAddtask}
          />
        );
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        height: "100%",
        overflow: "scroll",
      }}
    >
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          position: "sticky",
          top: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            position: "relative",
            border: "none",
            padding: "1rem",
            zIndex: 0,
          },
        }}
        variant="permanent"
      >
        <List>
          {newCustomerList.map((element, index) => (
            <ListItem
              sx={{
                backgroundColor:
                  params.dashboards === element.page.toLowerCase()
                    ? "#D9D9D93D"
                    : "",
                borderRadius: "5px",
              }}
              key={index}
              disablePadding
            >
              <ListItemButton
                sx={{
                  padding: "8px 16px",
                  width: "100%",
                  backgroundColor:
                    element.page.toLowerCase() == service ? "#D9D9D93D" : "",
                }}
                onClick={() => {
                  setService(element.page.toLowerCase());
                }}
              >
                <ListItemIcon
                  sx={{ minWidth: "36px", color: "black", fontSize: "24px" }}
                >
                  {React.cloneElement(element.icon, {
                    sx: { color: "black", fontSize: "24px" },
                  })}
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography
                      sx={{
                        color: "black",
                        fontSize: "1rem",
                        fontWeight: "100",
                      }}
                    >
                      {element.page}
                    </Typography>
                  }
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          pl: "1.4rem",
          height: "100%",
        }}
      >
        <Box
          sx={{
            backgroundColor: "white",
            border: "2.4rem solid white",
            height: "100%",
            overflow: "scroll",
            position: "relative",
          }}
        >
          {renderComponent()}
        </Box>
      </Box>
    </Box>
  );
}
