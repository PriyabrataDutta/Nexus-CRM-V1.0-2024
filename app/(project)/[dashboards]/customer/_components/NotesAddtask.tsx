import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import InputDashboard from "../../_components/form/InputDashboard";
import LabelDashboard from "../../_components/form/LabelDashboard";
import TextAreaDashboard from "../../_components/form/TextAreaDashboard";
import SaveButton from "./button/Save-Button";
import Cancelbutton from "./button/Cancel-button";
import { Datatable, createData } from "./typevalidation/notes";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  tittle: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
});

function NotesAddtask({
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
  const cancel = () => {
    setAddtask({ addmode: false, editmode: undefined });
  };

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const Submit = () => {
    if (addtask.editmode == undefined) {
      setRows([
        ...rows,
        createData(rows.length, false, data.tittle, data.description),
      ]);
    } else {
      const update: any = rows.map((elem: any) => {
        if (addtask.editmode == elem.id) {
          return {
            ...elem,
            tablehead: data.tittle,
            description: data.description,
          };
        }
        return elem;
      });

      setRows(update);
    }
    cancel();
    setData({ ...data, tittle: "", description: "" });
  };

  const onSubmit = (data: any) => {
    Submit();
  };

  const keys = Object.keys(data);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        position: "absolute",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        backgroundColor: "rgba(255, 255, 255, 0.11)",
        padding: "0% 10%",
      }}
    >
      <Box
        padding={2}
        sx={{
          width: "100%",
          height: "100%",
          alignItems: "center",
          zIndex: 100,
          borderRadius: "8px",
          border: "1px solid #f0f0f0",
          backgroundColor: "white",
        }}
      >
        <Box
          component="form"
          width="100%"
          height="100%"
          borderRadius="8px"
          display="flex"
          flexDirection="column"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Box sx={{ marginBottom: "1rem" }}>
            <LabelDashboard label="Tittle" />
            <InputDashboard
              name={keys[1]}
              data={data}
              setValue={setData}
              register={register}
            />
            {errors.tittle && (
              <Typography component="p" sx={{ color: "red", marginTop: "4px" }}>
                {errors.tittle.message}
              </Typography>
            )}
          </Box>
          <Box
            sx={{
              marginBottom: "1rem",
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <LabelDashboard label="Description" />
            <TextAreaDashboard
              name="description"
              data={data}
              setValue={setData}
              register={register}
            />
            {errors.description && (
              <Typography component="p" sx={{ color: "red", marginTop: "4px" }}>
                {errors.description.message}
              </Typography>
            )}
          </Box>
          <Box sx={{ display: "flex", gap: "16px", justifyContent: "center" }}>
            <SaveButton type="submit" />
            <Cancelbutton cancel={cancel} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default NotesAddtask;
