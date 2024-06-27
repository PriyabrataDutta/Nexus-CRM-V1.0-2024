import { Typography } from "@mui/material";
import React from "react";

function Subtitle({ color }: { color: string }) {
  return (
    <Typography
      sx={{
        color: color,
        fontFamily: "poppins",
        fontSize: "40px",
        lineHeight: "45px",
        fontWeight: 275,
      }}
      variant="h1"
      component="h2"
    >
      Welcome to Nexux Nest 1.0
    </Typography>
  );
}

export default Subtitle;
