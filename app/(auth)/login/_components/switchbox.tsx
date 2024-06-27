import { Switch } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import FormControlLabel from "@mui/material/FormControlLabel";

const Android12Switch = styled(Switch)(({ theme }) => ({
  padding: 8,
  marginLeft: "3px",
  "& .MuiSwitch-track": {
    borderRadius: 22 / 2,
    "&::before, &::after": {
      content: '""',
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      width: 16,
      height: 16,
    },
    "&::before": {
      left: 12,
    },
    "&::after": {
      right: 12,
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "none",
    width: 16,
    height: 16,
    margin: 2,
  },
}));

function Switchbox() {
  return (
    <>
      <FormControlLabel
        control={<Android12Switch />}
        label="Remember me"
        sx={{
          "& .MuiFormControlLabel-label": {
            lineHeight: "12px",
            fontFamily: "SF Pro Display",
            letterSpacing: "0.3px",
            fontSize: "14px",
            color: "#333333",
            fontWeight: 400,
          },
        }}
      />
    </>
  );
}

export default Switchbox;
