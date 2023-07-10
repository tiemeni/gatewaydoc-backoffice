import React from "react";
import FormGenerator from "../../Components/authers/FormGenerator";
import { patientFields } from "../../Constants/fields";
import { getAllGroup } from "../../services/groups";
import { getAllCivilities } from "../../services/commons";
import { useDispatch, useSelector } from "react-redux";
import { saveGroups } from "../../REDUX/groups/actions";
import { getCivilities } from "../../REDUX/commons/actions";
import { useParams } from "react-router-dom";
import generatePassword from "../../helpers/passwordGenerator";
import { createPatient, updatePatient } from "../../services/patients";

const NewPatient = () => {
  const { fields } = patientFields;
  const dispatch = useDispatch();

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
  patientFields.fields.forEach((field) => {
   
    if (field.name === "civility") field.data = civList;
  });

  const onSubmit = async (data) => {
    if (!userId) {
      const payload = { ...data, password: generatePassword() };
      const result = await createPatient(payload);
      if (result.success !== true) return;
      setRedirect("/content/patients");
    } else {
      //update user
      const result = await updatePatient(data, userId);
      if (result.success !== true) return;
      setRedirect("/content/patients");
    }
  };

  return (
    <FormGenerator
      fields={patientFields}
      title={"Gestion des patients"}
      dataId={userId}
      type={"user"}
      redirect={redirect}
      onSubmit={onSubmit}
    />
  );
};

export default NewPatient;

