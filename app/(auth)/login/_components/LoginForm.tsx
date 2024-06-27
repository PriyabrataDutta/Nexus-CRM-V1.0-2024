import {
  Box,
  Grid,
  Switch,
  Typography,
  SwitchProps,
  Button,
} from "@mui/material";
import React from "react";
import InputField from "./inputField";
import Link from "next/link";
import Switchbox from "./switchbox";

function LoginForm() {
  return (
    <>
      <Box component="form" style={{ width: "398px" }}>
        <Typography
          sx={{
            color: "#1A1A1A",
            fontFamily: "poppins",
            fontSize: "20px",
            lineHeight: "28px",
            fontWeight: 600,
            marginBottom: "24px",
          }}
          variant="h1"
          component="h2"
        >
          Login to Nexus Nest 1.0
        </Typography>
        <Grid container spacing={"16px"}>
          <Grid item xs={12} spacing={"12px"}>
            <InputField
              label="login"
              type="text"
              placeholder="Email or phone number"
            />
          </Grid>
          <Grid item xs={12}>
            <InputField
              label="Passowrd"
              type="password"
              placeholder="Enter passowrd"
            />
          </Grid>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            item
            xs={12}
          >
            <Switchbox />
            <Link style={{ textDecoration: "none" }} href="/forgot-password">
              <Typography
                sx={{
                  lineHeight: "12px",
                  fontFamily: "SF Pro Display",
                  letterSpacing: "0.3px",
                  fontSize: "14px",
                  color: "#007AFF",
                  fontWeight: 400,
                }}
                component="p"
              >
                Forgot password?
              </Typography>
            </Link>
          </Grid>
        </Grid>
        <Button
          sx={{
            width: "100%",
            marginTop: "24px",
            padding: "6px 24px 6px 24px",
            textTransform: "none",
            fontSize: "18px",
            fontWeight: 500,
          }}
          variant="contained"
        >
          Sign in
        </Button>
      </Box>
    </>
  );
}

export default LoginForm;
