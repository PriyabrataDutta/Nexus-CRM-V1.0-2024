"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  FormControlLabel,
  Switch,
} from "@mui/material";
import {
  Cancel,
  DriveFolderUpload as DriveFolderUploadIcon,
} from "@mui/icons-material";
import LabelDashboard from "../../_components/form/LabelDashboard";
import InputDashboard from "../../_components/form/InputDashboard";
import SaveButton from "./button/Save-Button";
import Cancelbutton from "./button/Cancel-button";
import TextAreaDashboard from "../../_components/form/TextAreaDashboard";
import { profile } from "./JsonOfFrom/FromInCustomer";
import { Datatable, createData } from "./typevalidation/cutomerlist";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Submit } from "./task/Submit";

// Validation Schema
const schema = yup.object().shape({
  customername: yup.string().required("Customer name is required"),
  company: yup.string().required("Company is required"),
  phonenumber: yup
    .string()
    .required("Phone number is required")
    .matches(/^[0-9]{10}$/, "Phone number is not valid"),
  email: yup.string().email("Email is not valid").required("Email is required"),
});

function ContactformCustomer({
  addtask,
  setRows,
  rows,
  setAddtask,
  data,
  setData,
}: {
  setRows: React.Dispatch<React.SetStateAction<any[]>>;
  rows: any;
  setAddtask: React.Dispatch<
    React.SetStateAction<{ addmode: boolean; editmode: number | undefined }>
  >;
  data: Datatable;
  addtask: any;
  setData: React.Dispatch<React.SetStateAction<Datatable>>;
}) {
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      customername: data.customername,
      company: data.company,
      phonenumber: data.phonenumber,
      email: data.email,
    },
  });

  const onSubmit = (data: any) => {
    Submit(setRows, addtask, rows, createData, data, setData, setAddtask);
  };

  const cancel = () => {
    setAddtask({ addmode: false, editmode: undefined });
  };

  const formdata = profile;

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <Box sx={{ marginBottom: "1rem" }}>
            <LabelDashboard label={formdata.customername.label} />
            <InputDashboard
              name="customername"
              data={data}
              setValue={setData}
              register={register}
            />
            {errors.customername && (
              <Typography component="p" sx={{ color: "red", marginTop: "4px" }}>
                {errors.customername.message}
              </Typography>
            )}
          </Box>
          <Box sx={{ marginBottom: "1rem" }}>
            <LabelDashboard label={formdata.companyname.label} />
            <InputDashboard
              name="company"
              data={data}
              setValue={setData}
              register={register}
            />
            {errors.company && (
              <Typography component="p" sx={{ color: "red", marginTop: "4px" }}>
                {errors.company.message}
              </Typography>
            )}
          </Box>
          <Box sx={{ marginBottom: "1rem" }}>
            <LabelDashboard label={formdata.phonenumber.label} />
            <InputDashboard
              name="phonenumber"
              data={data}
              setValue={setData}
              register={register}
            />
            {errors.phonenumber && (
              <Typography component="p" sx={{ color: "red", marginTop: "4px" }}>
                {errors.phonenumber.message}
              </Typography>
            )}
          </Box>
          <Box sx={{ marginBottom: "1rem" }}>
            <LabelDashboard label="Email" />
            <InputDashboard
              name="email"
              data={data}
              setValue={setData}
              register={register}
            />
            {errors.email && (
              <Typography component="p" sx={{ color: "red", marginTop: "4px" }}>
                {errors.email.message}
              </Typography>
            )}
          </Box>
          <Box sx={{ marginBottom: "1rem" }}>
            <LabelDashboard label="Description" />
            <Box sx={{ height: "101px" }}>
              {/* <TextAreaDashboard name="description" register={register} /> */}
            </Box>
          </Box>
          <Grid container columnSpacing={3}>
            <Grid item xs={6}>
              <Box sx={{ marginBottom: "1rem" }}>
                <LabelDashboard label="Customer Name" />
                {/* <InputDashboard /> */}
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box sx={{ marginBottom: "1rem" }}>
                <LabelDashboard label="Customer Name" />
                {/* <InputDashboard /> */}
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box sx={{ marginBottom: "1rem" }}>
                <LabelDashboard label="Customer Name" />
                {/* <InputDashboard /> */}
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box sx={{ marginBottom: "1rem" }}>
                <LabelDashboard label="Customer Name" />
                {/* <InputDashboard /> */}
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Box sx={{ textAlign: "center", mt: 0, position: "sticky", top: 35 }}>
            {selectedImage && (
              <Box sx={{ mb: 2 }}>
                <Box
                  component="img"
                  sx={{
                    mt: 2,
                    maxWidth: "100%",
                    height: "auto",
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                  }}
                  src={selectedImage}
                  alt="Selected"
                />
              </Box>
            )}
            {!selectedImage && (
              <Box
                sx={{
                  mb: 2,
                  width: "100%",
                  height: "217px",
                  border: "solid 1px rgba(0, 0, 0, 0.23)",
                  borderRadius: "8px",
                }}
              ></Box>
            )}

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
              component="label"
              startIcon={<DriveFolderUploadIcon />}
            >
              Upload Image
              <input
                type="file"
                hidden
                accept="image/*"
                onChange={handleImageChange}
              />
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ display: "flex", gap: "16px", padding: "2rem 0px 0.8rem" }}>
        <SaveButton type="submit" />
        <Cancelbutton cancel={cancel} />
      </Box>
    </Box>
  );
}

export default ContactformCustomer;
