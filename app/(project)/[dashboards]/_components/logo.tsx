import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";

function Logo() {
  return (
    <Box
      sx={{
        backgroundColor: "#FFFFFF",
        width: "161px",
        height: "41px",
        borderRadius: "5px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        width={144}
        height={34}
        alt="logo"
        loading="eager"
        src="/images/logo.png"
        priority
      />
    </Box>
  );
}

export default Logo;
