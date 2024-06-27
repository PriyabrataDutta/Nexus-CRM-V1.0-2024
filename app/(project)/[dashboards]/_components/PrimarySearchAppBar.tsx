import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Notification from "./notification";
import { notificationList } from "@/utils/dashboards/customer-list";
import { styled } from "@mui/material";

const CustomAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "white",
  boxShadow: "none",
}));

export default function PrimarySearchAppBar({
  drawerWidth,
}: {
  drawerWidth: number;
}) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(100% - ${drawerWidth}px)`,
        ml: `${drawerWidth}px`,
        backgroundColor: "white",
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 50px",
      }}
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          {notificationList.map((element, index) => (
            <Notification key={index} element={element} />
          ))}
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
            sx={{
              borderRadius: "5px",
              backgroundColor: "#F0F0FF",
              margin: "0rem 0.4rem",
            }}
          >
            <Badge badgeContent={0} color="error">
              <AccountCircleIcon sx={{ color: "#003380", width: "1.5rem" }} />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
