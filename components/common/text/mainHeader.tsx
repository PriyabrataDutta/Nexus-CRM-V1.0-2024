import { Typography } from "@mui/material";
import React from "react";

function MainHeader({ color }: { color: string }) {
  return (
    <Typography
      sx={{
        color: color,
        fontFamily: "poppins",
        fontSize: "64px",
        lineHeight: "92px",
        fontWeight: 600,
      }}
      variant="h1"
      component="h2"
    >
      Hi
    </Typography>
  );
}

export default MainHeader;
