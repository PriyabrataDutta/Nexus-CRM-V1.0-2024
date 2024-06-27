import { OutlinedInput } from "@mui/material";
import React from "react";

function InputDashboard({
  name,
  data,
  setValue,
  register,
}: {
  name: any;
  data: any;
  setValue: React.Dispatch<React.SetStateAction<any>>;
  register: any;
}) {
  return (
    <>
      <OutlinedInput
        {...register(name)}
        value={data[name]}
        onChange={(e) => {
          setValue((prevData: any) => ({
            ...prevData,
            [name]: e.target.value,
          }));
        }}
        sx={{
          width: "100%",
          backgroundColor: "#f9f9f9",
          height: "36px",
          padding: "0px",
          "& .MuiOutlinedInput-input": {
            // padding: "0px",
          },
        }}
        inputProps={{
          style: {
            padding: "0px 10px",
            height: "36px",
          },
        }}
      />
    </>
  );
}

export default InputDashboard;
