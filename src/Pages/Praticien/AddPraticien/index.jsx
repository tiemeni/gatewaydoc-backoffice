import React from "react";
import UsersLayout from "../../../layout/usersLayout";
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
import { useDispatch, useSelector } from "react-redux";
import { getAllCivilities } from "../../../services/commons";
import { getCivilities } from "../../../REDUX/commons/actions";
import { saveGroups } from "../../../REDUX/groups/actions";
import { getAllGroup } from "../../../services/groups";
import { useParams } from "react-router-dom";
import { practitionerFields } from "../../../Constants/fields";
import generatePassword from "../../../helpers/passwordGenerator";
import { createPraticien, updatePraticien } from "../../../services/praticiens";
import FormGenerator from "../../../Components/authers/FormGenerator";

const AddPraticien = () => {

  const { fields } = practitionerFields;
  const dispatch = useDispatch();
  const groupList = useSelector((state) => state.Groups.groups);
  const civList = useSelector((state) => state.Common.civilities);
  const { praticienId } = useParams();

  const [redirect, setRedirect] = React.useState(false);

  const getGroups = async () => {
    const groups = await getAllGroup();
    if (groups.success !== true) return;
    dispatch(saveGroups(groups.data));
  };

  const getCiv = async () => {
    const civilities = await getAllCivilities();
    if (civilities.success !== true) return;
    dispatch(getCivilities(civilities.data));
  };

  // recuperer les valeurs des champs de selection
  const getRelatedValues = async () => {
    fields.map((field) => {
      switch (field.name) {
        case "groups":
          console.log('groups call ...')
          getGroups();
          break;
        case "civility":
          getCiv();
          break;
        default:
          break;
      }
    });
  };

  React.useEffect(() => {
    getRelatedValues();
  }, []);

  // Attribuer les valeurs récupérées
  practitionerFields.fields.forEach((field) => {
    if (field.name === "groups") field.data = groupList;
    if (field.name === "civility") field.data = civList;
  });

  const onSubmit = async (data) => {
    if (!praticienId) {
      const payload = { ...data, password: generatePassword() };
      const result = await createPraticien(payload);
      if (result.success !== true) return;
      setRedirect("/content/praticiens");
    } else {
      //update user
      const result = await updatePraticien(data, praticienId);
      if (result.success !== true) return;
      setRedirect("/content/praticiens");
    }
  };


  return (
    <FormGenerator
      fields={practitionerFields}
      title={"Gestion des praticiens"}
      dataId={praticienId}
      type={"praticien"}
      redirect={redirect}
      onSubmit={onSubmit}
    />
  )
};

export default AddPraticien;
