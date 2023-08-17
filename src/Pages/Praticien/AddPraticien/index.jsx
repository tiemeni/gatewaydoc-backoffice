import React from "react";
import FormGenerator from "../../../Components/authers/FormGenerator";
import { practitionerFields } from "../../../Constants/fields";
import { getAllGroup } from "../../../services/groups";
import { getAllCivilities } from "../../../services/commons";
import { useDispatch, useSelector } from "react-redux";
import { saveGroups } from "../../../REDUX/groups/actions";
import { getCivilities } from "../../../REDUX/commons/actions";
import { useParams } from "react-router-dom";
import generatePassword from "../../../helpers/passwordGenerator";
import { createPraticien, editPraticien } from "../../../services/praticiens";

const AddPraticien = () => {
  const { fields } = practitionerFields;
  const dispatch = useDispatch();
  const groupList = useSelector((state) => state.Groups.groups);
  const civList = useSelector((state) => state.Common.civilities);
  const { userId } = useParams();

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
    if (!userId) {
      const datas = { ...data, password: generatePassword() };
      const result = await createPraticien(datas);
      if (result.success !== true) return;
      setRedirect("/content/praticiens");
    } else {
      //update user
      const result = await editPraticien(userId, data);
      if (result.success !== true) return;
      setRedirect("/content/praticiens");
    }
  };

  return (
    <FormGenerator
      fields={practitionerFields}
      title={"Gestion des utilisateurs"}
      dataId={userId}
      type={"praticien"}
      redirect={redirect}
      onSubmit={onSubmit}
    />
  );
};

export default AddPraticien;
