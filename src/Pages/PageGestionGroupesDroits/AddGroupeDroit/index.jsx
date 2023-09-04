import React from "react";
import FormGenerator from "../../../Components/authers/FormGenerator";
import { groupe_droitFields } from "../../../Constants/fields";
import { getAllGroup } from "../../../services/groups";
import { useDispatch, useSelector } from "react-redux";
import { saveGroups } from "../../../REDUX/groups/actions";
import { useParams } from "react-router-dom";
import { createMotif, editMotif } from "../../../services/motifs";

const AddGroupeDroit = () => {
  const { fields } = groupe_droitFields;
  const dispatch = useDispatch();
  const { groupeId } = useParams();

  const [redirect, setRedirect] = React.useState(false);


  // recuperer les valeurs des champs de selection
  
  React.useEffect(() => {
   
  }, []);


  const onSubmit = async (data) => {
    if (!groupeId) {
      const datas = { ...data  };
      const result = await createMotif(datas);
      if (result.success !== true) return;
      setRedirect("/content/groupe_droits");
    } else {
      //update groupe
      const result = await editMotif(data,groupeId);
      if (result.success !== true) return;
      setRedirect("/content/groupe_droits");
    }
  };

  return (
    <FormGenerator
      fields={groupe_droitFields}
      title={"Gestion des Groupes et droits"}
      dataId={groupeId}
      type={"groupe_droit"}
      redirect={redirect}
      onSubmit={onSubmit}
    />
  );
};

export default AddGroupeDroit;
