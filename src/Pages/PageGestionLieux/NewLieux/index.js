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
import { createLieux, updateLieu } from "../../../services/lieu";

const NewLieux = () => {
  const { fields } = lieuxFields;
  const dispatch = useDispatch();
  const groupList = useSelector((state) => state.Groups.groups);
  const civList = useSelector((state) => state.Common.civilities);
  const { lieuId } = useParams();

  const [redirect, setRedirect] = React.useState(false);


  React.useEffect(() => {
    // getRelatedValues();
  }, []);

  // Attribuer les valeurs récupérées
  // lieuxFields.fields.forEach((field) => {
  //   if (field.name === "groups") field.data = groupList;
  //   if (field.name === "civility") field.data = civList;
  // });

  const onSubmit = async (data) => {
    console.log(data)
    if (!lieuId) {
      const payload = { ...data };
      const result = await createLieux(payload);
      if (result.success !== true) return;
      setRedirect("/content/lieux");
    } else {
      //update user
      const result = await updateLieu(data, lieuId);
      if (result.success !== true) return;
      setRedirect("/content/lieux");
    }
  };

  return (
    <FormGenerator
      fields={lieuxFields}
      title={"Gestion des lieux"}
      dataId={lieuId}
      type={"lieu"}
      redirect={redirect}
      onSubmit={onSubmit}
    />
  );
};

export default NewLieux;
