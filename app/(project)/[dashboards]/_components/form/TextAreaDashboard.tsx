"use client";
import { styled } from "@mui/material";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import React from "react";

const StyledTextArea = styled(TextareaAutosize)({
  width: "100%",
  backgroundColor: "#f9f9f9",
  padding: "0.7rem",
  fontSize: "16px",
  border: "1px solid #ccc",
  borderRadius: "4px",
  height: "100% !important",
});

function TextAreaDashboard({
  name,
  data,
  setValue,
  register,
}: {
  name: string;
  data: any;
  setValue: React.Dispatch<React.SetStateAction<any>>;
  register: any;
}) {
  return (
    <StyledTextArea
      {...register(name)}
      value={data[name]}
      onChange={(e) => {
        setValue((prevData: any) => ({
          ...prevData,
          [name]: e.target.value,
        }));
      }}
      aria-label="empty textarea"
    />
  );
}

export default TextAreaDashboard;
