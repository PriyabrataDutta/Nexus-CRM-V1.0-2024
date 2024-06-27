import { Button } from "@mui/material";
import React from "react";

function Addtask({
  name,
  setAddtask,
}: {
  setAddtask: React.Dispatch<
    React.SetStateAction<{ addmode: boolean; editmode: number | undefined }>
  >;
  name: string;
}) {
  return (
    <Button
      sx={{
        width: "165px",
        height: "38px",
        borderRadius: "8px",
        textTransform: "none",
        fontSize: "16px",
        fontWeight: 400,
        marginBottom: "0.8rem",
        backgroundColor: "#7A5CFA",
        ":hover": {
          backgroundColor: "#003380",
        },
      }}
      variant="contained"
      onClick={() => {
        setAddtask({ addmode: true, editmode: undefined });
      }}
    >
      {name}
    </Button>
  );
}

export default Addtask;
