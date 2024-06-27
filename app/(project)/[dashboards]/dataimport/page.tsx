"use client";
import Subtitle from "@/components/common/text/Subtitle";
import MainHeader from "@/components/common/text/mainHeader";
import { Box, Button, Typography } from "@mui/material";
import Searchbar from "./_components/Searchbar";

export default function Home() {
  return (
    <>
      <Box sx={{ marginLeft: "57px" }}>
        <MainHeader color="#000000" />
        <Subtitle color="#000000" />
        <Typography
          sx={{
            color: "black",
            fontFamily: "Poppins, sans-serif",
            fontSize: "1.2rem",
            lineHeight: "2.6rem",
            fontWeight: 275, // Using a standard valid fontWeight value
          }}
          variant="h1"
          component="h2"
        >
          To Continue, please import your data to CRM. (
          <Typography
            component="span"
            sx={{ fontSize: "1rem", color: "#7A5CFA", fontWeight: 275 }}
          >
            Download
          </Typography>{" "}
          <Typography
            component="span"
            sx={{ fontSize: "1rem", fontWeight: 275 }}
          >
            the format from here
          </Typography>
          )
        </Typography>
        <Box display={"flex"} sx={{ alignItems: "center" }}>
          <Box sx={{ width: "561px" }}>
            <Searchbar />
          </Box>
          <Button
            sx={{
              height: "56px",
              width: "172px",
              fontSize: "1.2rem",
              backgroundColor: "#7A5CFA",
              textTransform: "none",
              marginLeft: "10px",
            }}
            variant="contained"
          >
            Go
          </Button>
          <Button
            sx={{
              height: "56px",
              width: "172px",
              fontSize: "1.2rem",
              textTransform: "none",
              marginLeft: "10px",
              color: "#7A5CFA",
              border: "solid 1px #7A5CFA",
            }}
            variant="outlined"
          >
            Skip
          </Button>
        </Box>
        <Typography
          sx={{ fontSize: "1rem", fontWeight: 275, marginTop: "1.6rem" }}
        >
          (Note: this will follow a loading animation ) This is for developer
        </Typography>
      </Box>
    </>
  );
}
