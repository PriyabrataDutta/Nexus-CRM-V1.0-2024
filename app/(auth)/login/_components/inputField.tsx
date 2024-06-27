import React from "react";
import { Box, Grid } from "@mui/material";
import InputLogin from "./inputLogin";
import InputLabelLogin from "./inputLabelLogin";

function InputField({
  label,
  placeholder,
  type,
}: {
  label: string;
  placeholder: string;
  type: string;
}) {
  return (
    <Grid container spacing={"11px"}>
      <Grid item xs={12}>
        <Box sx={{ padding: "0px 16px 0px 16px" }}>
          <InputLabelLogin label={label} />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <InputLogin placeholder={placeholder} type={type} />
      </Grid>
    </Grid>
  );
}

export default InputField;
