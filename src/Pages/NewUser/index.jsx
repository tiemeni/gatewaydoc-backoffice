import React from "react";
import FormGenerator from "../../Components/authers/FormGenerator";
import { userFields } from "../../Constants/fields";
import { getAllGroup } from "../../services/groups";
import { getAllCivilities } from "../../services/commons";
import { useDispatch, useSelector } from "react-redux";
import { saveGroups } from "../../REDUX/groups/actions";
import { getCivilities } from "../../REDUX/commons/actions";
import { useParams } from "react-router-dom";

const NewUser = () => {
  const { fields } = userFields;
  const dispatch = useDispatch();
  const groupList = useSelector((state) => state.Groups.groups);
  const civList = useSelector((state) => state.Common.civilities);
  const { userId } = useParams();

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
  userFields.fields.forEach((field) => {
    if (field.name === "groups") field.data = groupList;
    if (field.name === "civility") field.data = civList;
  });

  return (
    <FormGenerator
      fields={userFields}
      title={"Gestion des utilisateurs"}
      dataId={userId}
    />
  );
};

export default NewUser;
