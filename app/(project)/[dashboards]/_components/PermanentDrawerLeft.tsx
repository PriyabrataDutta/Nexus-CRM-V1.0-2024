"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import Logo from "./logo";
import { costomerList } from "@/utils/dashboards/customer-list";
import { useParams } from "next/navigation";
import Link from "next/link";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PrimarySearchAppBar from "./PrimarySearchAppBar";

const drawerWidth = 284;

export default function PermanentDrawerLeft({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const params = useParams();

  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "#e9ecec",
        width: "auto",
        position: "static",
        overflow: "scroll",
        height: "100%",
      }}
    >
      <CssBaseline />
      <PrimarySearchAppBar drawerWidth={drawerWidth} />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#003380",
            padding: "30px 20px",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Logo />
        </Box>
        <Box>
          <Typography
            sx={{
              color: "#007AFF",
              fontSize: "14px",
              fontFamily: "SF Pro Display",
              fontWeight: 400,
              padding: "20px 0px 10px",
            }}
            component="p"
          >
            Pages
          </Typography>
        </Box>
        <List>
          {costomerList.map((element, index) => (
            <ListItem
              sx={{
                backgroundColor:
                  params.dashboards === element.page.toLowerCase()
                    ? "#5151f9"
                    : "",
                borderRadius: "5px",
              }}
              key={index}
              disablePadding
            >
              <Link
                style={{ width: "100%", textDecoration: "none" }}
                href={element.page.toLocaleLowerCase()}
              >
                <ListItemButton
                  sx={{
                    padding: "8px 16px",
                    width: "100%",
                  }}
                >
                  <ListItemIcon
                    sx={{ minWidth: "42px", color: "white", fontSize: "24px" }}
                  >
                    {React.cloneElement(element.icon, {
                      sx: { color: "white", fontSize: "24px" },
                    })}
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography
                        sx={{
                          color: "white",
                          fontSize: "1rem",
                          fontWeight: "100",
                        }}
                      >
                        {element.page}
                      </Typography>
                    }
                  />
                  {element.submenu && element.submenu.length > 0 && (
                    <KeyboardArrowDownIcon
                      sx={{ color: "white", fontSize: "24px" }}
                    />
                  )}
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 1.2,
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          paddingTop: "74px",
        }}
      >
        {/* <Toolbar /> */}
        {children}
      </Box>
    </Box>
  );
}
