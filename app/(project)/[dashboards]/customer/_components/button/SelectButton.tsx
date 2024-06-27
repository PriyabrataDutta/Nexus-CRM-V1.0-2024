import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";

function SelectButton() {
  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  return (
    <FormControl
      sx={{
        padding: "0px",
        width: "100px",
        borderRadius: "20px",
      }}
      fullWidth
    >
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={age}
        onChange={handleChange}
        sx={{
          "& .MuiSelect-select": {
            height: "100%",
            backgroundColor: "#F6F6F6",
            borderRadius: "20px !important",
            fontSize: "12px",
          },
          "& .MuiOutlinedInput-input": {
            padding: "6px 15px",
            borderRadius: "20px !important",
            fontSize: "12px",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderRadius: "20px !important",
            border: "none",
            boxShadow: "rgba(149, 157, 165, 0.2) 0px 4px 4px",
          },
        }}
      >
        <MenuItem value={10} sx={{ fontSize: "12px" }}>
          LOW BUDGET
        </MenuItem>
        <MenuItem value={20} sx={{ fontSize: "12px" }}>
          VIP
        </MenuItem>
        <MenuItem value={30} sx={{ fontSize: "12px" }}>
          VVIP
        </MenuItem>
      </Select>
    </FormControl>
  );
}
export default SelectButton;
