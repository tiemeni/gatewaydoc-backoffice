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
import { useMemo } from "react";
import { useEffect, useState } from "react";

const errorMsg = "Ce champ est obligatoire";

const FormGenerator = ({ fields, initialising, title, back=()=>{}, dataId, type, loading, onSubmit, data = {} }) => {
  const mySchema = {};
   

  const [defaultValues, setDefaultValues] = useState({})
  
  // schema de validation et valeur par defaut
  fields.fields.forEach((field) => {
    const value =
    data &&
      (field.type === fieldTypes.SELECT
        ? data[field.name]?._id
        : data[field.name]);
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
    getValues,
    formState: { errors, isDirty },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { ...defaultValues },
  });
  
  useEffect(()=>{
    setDefaultValues(data||{})
    fields.fields.forEach((field)=>{
      setValue(field.name, defaultValues[field.name]) 
    })
  },[data])

  const reset = ()=>{
    fields.fields.forEach((field)=>{
      setValue(field.name, defaultValues[field.name]) 
    })
  }
  const submit = async (data)=>{
    const status = await onSubmit(data);
    if(status){
      reset();
    }
  }
  return (
    <UsersLayout title={title}>
      <Grid item xs={12} px={2} py={5}>
        <form onSubmit={handleSubmit(submit)} style={styles.form}>
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
                    ...register(field?.name),
                    
                  }}
                  initialising={initialising}
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
                  initialising={initialising}
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
                  initialising={initialising}
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
                    value: defaultValues[field.name]
                  }}
                  initialising={initialising}
                  error={errors[field.name]}
                  onChange={(event, value) => setValue(field.name, value)}
                  value={defaultValues[field.name]}
                />
              );
            }
          })}
          <Box sx={styles.inputContainer} mt={2}>
            <Box sx={{ width: 250, background: "red" }}></Box>
            <Button color="error" type="button" disabled={loading} onClick={back} variant="contained">
               Annuler
            </Button>
            {
              isDirty &&  <Button color="warning" disabled={loading}  onClick={()=>reset()} type="button" variant="contained">
                Reinitialiser
            </Button>
            }

            <Button type="submit" disabled={loading} variant="contained">
               Enregistrer
            </Button>



            
          </Box>
        </form>

      </Grid>
    </UsersLayout>
  );
};

export default FormGenerator;
