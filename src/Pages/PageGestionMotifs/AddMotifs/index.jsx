import React from "react";
import FormGenerator from "../../../Components/authers/FormGenerator";
import { motifFields } from "../../../Constants/fields";
import { getAllGroup } from "../../../services/groups";
import { getAllCivilities } from "../../../services/commons";
import { useDispatch, useSelector } from "react-redux";
import { saveGroups } from "../../../REDUX/groups/actions";
import { getCivilities } from "../../../REDUX/commons/actions";
import { useParams } from "react-router-dom";
import { createMotif, editMotif } from "../../../services/motifs";

const AddMotif = () => {
  const { fields } = motifFields;
  const dispatch = useDispatch();
  const groupList = useSelector((state) => state.Groups.groups);
  const civList = useSelector((state) => state.Common.civilities);
  const { motifId } = useParams();

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
  motifFields.fields.forEach((field) => {
    if (field.name === "groups") field.data = groupList;
    if (field.name === "civility") field.data = civList;
  });

  const onSubmit = async (data) => {
    if (!motifId) {
      const datas = { ...data  };
      const result = await createMotif(datas);
      if (result.success !== true) return;
      setRedirect("/content/motifs");
    } else {
      //update motif
      const result = await editMotif(data,motifId);
      if (result.success !== true) return;
      setRedirect("/content/motifs");
    }
  };

  return (
    <FormGenerator
      fields={motifFields}
      title={"Gestion des motifs"}
      dataId={motifId}
      type={"motif"}
      redirect={redirect}
      onSubmit={onSubmit}
    />
  );
};

export default AddMotif;
