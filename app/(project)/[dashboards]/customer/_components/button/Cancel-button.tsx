import React from "react";
import { Button } from "@mui/material";

interface ChildComponentProps {
  cancel: () => void;
}

const Cancelbutton: React.FC<ChildComponentProps> = ({ cancel }) => {
  return (
    <Button
      sx={{
        color: "#000000",
        width: "165px",
        height: "38px",
        borderRadius: "8px",
        textTransform: "none",
        fontSize: "16px",
        fontWeight: 400,
        marginBottom: "0rem",
        backgroundColor: "#F0F0FF",
        ":hover": {
          backgroundColor: "#FF0000",
          color: "white",
        },
      }}
      variant="contained"
      onClick={cancel}
    >
      Cancel
    </Button>
  );
};

export default Cancelbutton;
