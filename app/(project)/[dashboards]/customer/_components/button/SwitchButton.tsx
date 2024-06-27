import React, { useState, useEffect } from "react";
import { Switch, styled } from "@mui/material";

const SwitchButtonstyle = styled(Switch)(({ theme }) => ({
  padding: 8,
  left: "0px",
  marginLeft: "0px",
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
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "none",
    width: 16,
    height: 16,
    margin: 2,
  },
  "& .MuiButtonBase-root.MuiSwitch-switchBase": {
    left: "0px",
  },
  "&.MuiFormControlLabel-root": {
    margin: "0px",
  },
}));

interface SwitchButtonProps {
  id: number;
  rows: any;
  setRows: any;
}

const SwitchButton: React.FC<SwitchButtonProps> = ({ id, rows, setRows }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    const updated = rows.map((elem: any) => {
      console.log("active", elem.active);
      if (id === elem.id) {
        return {
          ...elem,
          active: {
            ...elem.active,
            value: event.target.checked,
          },
        };
      }
      return elem;
    });
    setRows(updated);
  };

  return <SwitchButtonstyle checked={checked} onChange={handleChange} />;
};

export default SwitchButton;
