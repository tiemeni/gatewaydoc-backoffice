import React from "react";
import UsersLayout from "../../layout/usersLayout";
import SearchAccordion from "../../Components/authers/SearchAccordion";
import {
  Box,
  Button,
  FormHelperText,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "./style";

const errorMsg = "Ce champ est obligatoire";
const schema = yup.object().shape({
  civilite: yup.string().required(errorMsg),
  profession: yup.string().required(errorMsg),
  fonction: yup.string().required(errorMsg),
  nom: yup.string().required(errorMsg),
  prenom: yup.string().required(errorMsg),
  email: yup.string().email("Email invalide").required(errorMsg),
});

const MySelect = ({ error, register, label }) => {
  return (
    <Box sx={styles.inputContainer}>
      <Typography sx={styles.label}>{label}*</Typography>
      <Box sx={styles.input}>
        <Select
          {...register}
          error={error ? true : false}
          size="small"
          fullWidth
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText sx={styles.helperText}>{error?.message}</FormHelperText>
      </Box>
    </Box>
  );
};

const CustomInput = ({ label, error, register, type = "text" }) => {
  return (
    <Box sx={styles.inputContainer}>
      <Typography sx={styles.label}>{label}</Typography>
      <TextField
        type={type}
        {...register}
        error={error ? true : false}
        helperText={error?.message}
        size="small"
        sx={styles.input}
      />
    </Box>
  );
};

const NewUser = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => console.log(data);

  return (
    <UsersLayout>
      <Grid item xs={12} px={2} py={5}>
        <form onSubmit={handleSubmit(onSubmit)} style={styles.form}>
          <MySelect
            label={"Civilité"}
            register={{ ...register("civilite") }}
            error={errors.civilite}
          />

          <MySelect
            label={"Profession"}
            register={{ ...register("profession") }}
            error={errors.profession}
          />

          <MySelect
            label={"Fonction"}
            register={{ ...register("fonction") }}
            error={errors.fonction}
          />

          <CustomInput
            label={"Nom*"}
            register={{ ...register("nom") }}
            error={errors.nom}
          />

          <CustomInput
            label={"Prénom*"}
            register={{ ...register("prenom") }}
            error={errors.prenom}
          />

          <CustomInput
            label={"Photo*"}
            register={{ ...register("photo") }}
            type="file"
          />

          <CustomInput
            label={"Email*"}
            register={{ ...register("email") }}
            error={errors.email}
            type="email"
          />

          <MySelect
            label={"Le groupe"}
            register={{ ...register("groupe") }}
            error={errors.groupe}
          />

          <Box sx={styles.inputContainer}>
            <Typography sx={styles.label}>Actif*</Typography>
            <RadioGroup row>
              <FormControlLabel value="oui" control={<Radio />} label="Oui" />
              <FormControlLabel value="non" control={<Radio />} label="Non" />
            </RadioGroup>
          </Box>

          <CustomInput
            label={"Filtre sur les praticiens visibles"}
            register={{ ...register("filtrePraticien") }}
          />

          <CustomInput
            label={"Lieu affecté"}
            register={{ ...register("lieu") }}
          />

          <CustomInput
            label={"Filtre sur les motifs"}
            register={{ ...register("filtreMotif") }}
          />

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

export default NewUser;
