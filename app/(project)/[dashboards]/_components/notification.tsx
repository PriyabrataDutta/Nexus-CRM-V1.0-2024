import { Badge, IconButton, ListItemIcon } from "@mui/material";
import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";

function Notification({ element }: { element: any }) {
  return (
    <>
      <IconButton
        size="large"
        aria-label="show 17 new notifications"
        color="inherit"
        sx={{
          borderRadius: "5px",
          backgroundColor: "#F8F9FA",
          margin: "0rem 0.4rem",
        }}
      >
        <Badge badgeContent={0} color="primary">
          {React.cloneElement(element.icon, {
            sx: { color: "#9499A1", width: "1.5rem" },
          })}
        </Badge>
      </IconButton>
    </>
  );
}

export default Notification;
