import React, { useEffect, useState } from "react";
import { OutlinedInput, IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

function InputLogin({
  placeholder,
  type,
}: {
  placeholder: string;
  type: string;
}) {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };
  useEffect(() => {}, []);
  return (
    <>
      <OutlinedInput
        type={type == "password" ? (showPassword ? "text" : "password") : type}
        placeholder={placeholder}
        sx={{
          width: "100%",
          backgroundColor: "#f9f9f9",
          height: "48px",
          fontFamily: "SF Pro Display",
          position: "relative",
          paddingRight: type == "password" ? "2.8rem" : "16.5px",
        }}
        endAdornment={
          type == "password" ? (
            <InputAdornment
              sx={{ position: "absolute", right: "1.2rem" }}
              position="end"
            >
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ) : (
            <></>
          )
        }
      />
    </>
  );
}

export default InputLogin;
