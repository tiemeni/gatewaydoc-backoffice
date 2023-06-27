import React from "react";
import UsersLayout from "../../layout/usersLayout";
import { createUser } from "../../services/users/index";
import {
  Box,
  Button,
  Grid,
  Typography,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "./style";
import MySelect from "../../Components/authers/MySelect";
import CustomInput from "../../Components/authers/CustomInput";

const errorMsg = "Ce champ est obligatoire";
const schema = yup.object().shape({
  civilite: yup.string().required(errorMsg),
  profession: yup.string().required(errorMsg),
  fonction: yup.string().required(errorMsg),
  nom: yup.string().required(errorMsg),
  prenom: yup.string().required(errorMsg),
  email: yup.string().email("Email invalide").required(errorMsg),
});

const NewUser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const [isActif, setIsActif] = React.useState("oui");

  const onSubmit = async (data) => {
    await createUser(data);
  };
  const handleChange = (e) => setIsActif(e.target.value);

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
            label={"Initiales"}
            register={{ ...register("initiales") }}
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
            label={"Photo"}
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
            <RadioGroup
              name="actif"
              value={isActif}
              onChange={handleChange}
              row
            >
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
