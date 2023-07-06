import React from "react";
import UsersLayout from "../../../layout/usersLayout";
import { Box, Button, Grid } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import * as fieldTypes from "../../../Constants/fieldTypes";
import CustomInput from "../CustomInput";
import MySelect from "../MySelect";
import styles from "./style";
import CustomRadio from "../CustomRadio";
import AutoComplete from "../AutoComplete";

const FormGenerator = ({ fields, title }) => {
  const errorMsg = "Ce champ est obligatoire";
  const mySchema = {};
  fields.fields.forEach((field) => {
    if (field.type === fieldTypes.AUTO_COMPLETE) {
      //   mySchema[field.name] = yup.object();
      return;
    }
    mySchema[field.name] = field.required
      ? yup.string().required(errorMsg)
      : yup.string();
  });
  const schema = yup.object().shape({ ...mySchema });
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema)});

  const onSubmit = (data) => {
    console.log("data", data);
  };

  return (
    <UsersLayout title={title}>
      <Grid item xs={12} px={2} py={5}>
        <form onSubmit={handleSubmit(onSubmit)} style={styles.form}>
          {fields.fields.map((field) => {
            if (
              field.type === fieldTypes.TEXT ||
              field.type === fieldTypes.EMAIL ||
              field.type === fieldTypes.FILE
            ) {
              return (
                <CustomInput
                  key={field.id}
                  label={field.label}
                  register={{ ...register(field.name) }}
                  error={errors[field.name]}
                  type={field.type}
                  placeholder={field.placeholder}
                />
              );
            }
            if (field.type === fieldTypes.SELECT) {
              return (
                <MySelect
                  key={field.id}
                  label={field.label}
                  register={{ ...register(field.name) }}
                  error={errors[field.name]}
                />
              );
            }
            if (field.type === fieldTypes.RADIO) {
              return (
                <CustomRadio
                  key={field.id}
                  control={control}
                  label={field.label}
                  name={field.name}
                />
              );
            }
            if (field.type === fieldTypes.AUTO_COMPLETE) {
              return (
                <AutoComplete
                  key={field.id}
                  label={field.label}
                  register={{ ...register(field.name) }}
                  error={errors[field.name]}
                  onChange={(event, value) => setValue(field.name, value)}
                />
              );
            }
          })}
          <Box sx={styles.inputContainer} mt={2}>
            <Box sx={{ width: 250, background: "red" }}></Box>
            <Button type="submit" variant="contained">
              Enregistrer
            </Button>
          </Box>
        </form>
      </Grid>
    </UsersLayout>
  );
};

export default FormGenerator;
