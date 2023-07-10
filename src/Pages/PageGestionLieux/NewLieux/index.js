import React from "react";
import FormGenerator from "../../../Components/authers/FormGenerator";
import { lieuxFields } from "../../../Constants/fields";
import { getAllGroup } from "../../../services/groups";
import { getAllCivilities } from "../../../services/commons";
import { useDispatch, useSelector } from "react-redux";
import { saveGroups } from "../../../REDUX/groups/actions";
import { getCivilities } from "../../../REDUX/commons/actions";
import { useParams } from "react-router-dom";
import generatePassword from "../../../helpers/passwordGenerator";
import { createUser, updateUser } from "../../../services/users";

const NewLieux = () => {
  const { fields } = lieuxFields;
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
  lieuxFields.fields.forEach((field) => {
    if (field.name === "groups") field.data = groupList;
    if (field.name === "civility") field.data = civList;
  });

  const onSubmit = async (data) => {
    if (!userId) {
      const payload = { ...data, password: generatePassword() };
      const result = await createUser(payload);
      if (result.success !== true) return;
      setRedirect("/content/users");
    } else {
      //update user
      const result = await updateUser(data, userId);
      if (result.success !== true) return;
      setRedirect("/content/users");
    }
  };

  return (
    <FormGenerator
      fields={lieuxFields}
      title={"Gestion des lieux"}
      dataId={userId}
      type={"user"}
      redirect={redirect}
      onSubmit={onSubmit}
    />
  );
};

export default NewLieux;
