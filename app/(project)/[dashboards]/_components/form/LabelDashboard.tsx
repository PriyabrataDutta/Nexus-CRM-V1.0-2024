import { InputLabel } from "@mui/material";
import React from "react";

function LabelDashboard({ label }: { label: string }) {
  return (
    <InputLabel
      sx={{
        lineHeight: "30px",
        fontFamily: "Poppins",
        letterSpacing: "0.3px",
        color: "#000000",
        fontWeight: 400,
        fontSize: "1.2rem",
        marginBottom: "0.5rem",
      }}
      variant="standard"
      htmlFor="uncontrolled-native"
    >
      {label}
    </InputLabel>
  );
}

export default LabelDashboard;
