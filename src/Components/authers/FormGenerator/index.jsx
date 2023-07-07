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
import generatePassword from "../../../helpers/passwordGenerator";
import { createUser } from "../../../services/users";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const FormGenerator = ({ fields, title, dataId }) => {
  const usersList = useSelector((state) => state.Users.users);
  let toUpdate = undefined;

  const [redirect, setRedirect] = React.useState(false);
  const errorMsg = "Ce champ est obligatoire";
  const mySchema = {};
  fields.fields.forEach((field) => {
    if (field.type === fieldTypes.AUTO_COMPLETE) return;
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
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "Donald",
    },
  });

  const onSubmit = async (data) => {
    const payload = { ...data, password: generatePassword() };
    const result = await createUser(payload);
    if (result.success !== true) return;
    setRedirect("/content/users");
  };

  console.log("userId", dataId);

  if (dataId !== undefined) {
    toUpdate = usersList.find((user) => user._id === dataId);
    console.log(toUpdate);
  }

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
                  register={{
                    ...register(field.name, {
                      defaultValue: toUpdate ? toUpdate[field.name] : undefined,
                    }),
                  }}
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
                  register={{
                    ...register(field.name, {
                      defaultValue: toUpdate ? toUpdate[field.name] : undefined,
                    }),
                  }}
                  error={errors[field.name]}
                  fieldData={field.data}
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
                  register={{
                    ...register(field.name, {
                      defaultValue: toUpdate ? toUpdate[field.name] : undefined,
                    }),
                  }}
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
        {redirect && <Navigate to={redirect} />}
      </Grid>
    </UsersLayout>
  );
};

export default FormGenerator;
