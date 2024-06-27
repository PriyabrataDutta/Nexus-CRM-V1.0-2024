"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import LoginForm from "./_components/LoginForm";
import { Typography } from "@mui/material";
import MainHeader from "@/components/common/text/mainHeader";
import Subtitle from "@/components/common/text/Subtitle";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Home() {
  return (
    <>
      <Box sx={{ flexGrow: 1, padding: "0px" }}>
        <Grid
          container
          sx={{ height: "100vh", width: "100vw", margin: "0px" }}
          spacing={0}
        >
          <Grid item sx={{ width: "55%", height: "100%" }}>
            <Box
              sx={{
                height: "100%",
                backgroundImage: `
                  linear-gradient(#003380DB, #003380DB),
                  url(/images/home-banner.jpg)
                `,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box sx={{ position: "absolute", zIndex: 100 }}>
                <MainHeader color="#FFFBFB" />
                <Subtitle color="#FFFBFB" />
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            sx={{
              width: "45%",
              height: "100%",
              backgroundColor: "#e9ecec",
              padding: "16px",
            }}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <LoginForm />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
