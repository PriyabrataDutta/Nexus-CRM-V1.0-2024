import { OutlinedInput } from "@mui/material";
import React from "react";
import InputLabel from "@mui/material/InputLabel";

function InputLabelLogin({ label }: { label: string }) {
  return (
    <>
      <InputLabel
        sx={{
          lineHeight: "12px",
          fontFamily: "SF Pro Display",
          letterSpacing: "0.3px",
          color: "#333333",
          fontWeight: 400,
          fontSize: "14px",
        }}
        variant="standard"
        htmlFor="uncontrolled-native"
      >
        {label}
      </InputLabel>
    </>
  );
}

export default InputLabelLogin;
