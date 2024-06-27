import { Button } from "@mui/material";
import React from "react";

interface SubmitComponentProps {
  submit?: () => void;
  type?: "button" | "submit" | "reset"; // Adjusting the type to match valid button types
}

const SaveButton: React.FC<SubmitComponentProps> = ({
  submit,
  type = "button",
}) => {
  return (
    <>
      <Button
        sx={{
          width: "165px",
          height: "38px",
          borderRadius: "8px",
          textTransform: "none",
          fontSize: "16px",
          fontWeight: 400,
          marginBottom: "0rem",
          backgroundColor: "#7A5CFA",
          ":hover": {
            backgroundColor: "#003380",
          },
        }}
        variant="contained"
        type={type} // Correctly applying the type prop
      >
        Save
      </Button>
    </>
  );
};

export default SaveButton;
