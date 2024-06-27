import React from "react";
import { Box, Button, Typography, alpha, styled } from "@mui/material";
import InputBase from "@mui/material/InputBase";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "white",
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  height: "45px",
  [theme.breakpoints.up("sm")]: {
    width: "100%",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  fontSize: "1.36rem",
  fontFamily: "Poppins",
  fontWeight: 100,
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(1)})`,
    paddingRight: `calc(1em + ${theme.spacing(1)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "100%",
    },
  },
}));

function Searchbar() {
  return (
    <Search>
      <StyledInputBase
        placeholder="Click here to select the excel file"
        inputProps={{ "aria-label": "search" }}
      />
    </Search>
  );
}

export default Searchbar;
