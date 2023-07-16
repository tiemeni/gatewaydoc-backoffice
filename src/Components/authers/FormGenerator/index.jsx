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
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getValueFromReducer } from "../../../helpers/formGenerator";

const errorMsg = "Ce champ est obligatoire";

const FormGenerator = ({ fields, title, dataId, type, redirect, onSubmit }) => {
  console.log(dataId)
  const store = useSelector((state) => state);
  const toUpdate = getValueFromReducer(store, type, dataId);
  const mySchema = {};
  let defaultValues = {};

  // schema de validation et valeur par defaut
  fields.fields.forEach((field) => {
    const value =
      toUpdate &&
      (field.type === fieldTypes.SELECT
        ? toUpdate[field.name]?._id
        : toUpdate[field.name]);
    defaultValues[field.name] = value?.toString() || undefined;

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
    defaultValues: { ...defaultValues },
  });

  return (
    <UsersLayout title={title}>
      <Grid item xs={12} px={2} py={5}>
        <form onSubmit={handleSubmit(onSubmit)} style={styles.form}>
          {fields.fields.map((field) => {
            if (
              field.type === fieldTypes.TEXT ||
              field.type === fieldTypes.EMAIL ||
              field.type === fieldTypes.FILE ||
              field.type === fieldTypes.DATE ||
              field.type === fieldTypes.PASSWORD
            ) {
              return (
                <CustomInput
                  key={field.id}
                  label={field.label}
                  register={{
                    ...register(field.name),
                  }}
                  error={errors[field.name]}
                  type={field.type}
                  placeholder={field.placeholder}
                  value={defaultValues[field.name]}
                  onChange={(value) => setValue(field.name, value)}
                />
              );
            }
            if (field.type === fieldTypes.SELECT) {
              return (
                <MySelect
                  key={field.id}
                  label={field.label}
                  register={{
                    ...register(field.name),
                  }}
                  error={errors[field.name]}
                  fieldData={field.data}
                  value={defaultValues[field.name]}
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
                  value={defaultValues[field.name]}
                />
              );
            }
            if (field.type === fieldTypes.AUTO_COMPLETE) {
              return (
                <AutoComplete
                  key={field.id}
                  label={field.label}
                  register={{
                    ...register(field.name),
                  }}
                  error={errors[field.name]}
                  onChange={(event, value) => setValue(field.name, value)}
                  value={defaultValues[field.name]}
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
