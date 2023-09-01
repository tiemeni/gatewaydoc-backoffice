import { saveGroups } from "../../../REDUX/groups/actions";
import { savePatients } from "../../../REDUX/patients/actions";
import { getCivilities } from "../../../services/civilities";
import { getAllCivilities } from "../../../services/commons";
import { getAllGroup } from "../../../services/groups";
import { createPatient, getPatient, updatePatient,getPatients } from "../../../services/patients"

const getGroups = async (dispatch, state) => {
    const groups = await getAllGroup();
    if (groups.success !== true) return;
    dispatch(saveGroups(groups.data));
  };
  
  const getCiv = async (dispatch,state) => {
    const civilities = await getAllCivilities();
    if (civilities.success !== true) return;
    dispatch(getCivilities(civilities.data));
};
const user = {
    related: {
      loaders: [getGroups, getCiv],
      selector: (state) => [state.Groups.groups,state.Common.civilities],
      getRelatedValues: ([groupList, civList],fields=[]) => {
        // Attribuer les valeurs récupérées
            let results = [...fields]
            results.forEach((field) => {
              if (field.name === "groups") field.data = groupList;
              if (field.name === "civility") field.data = civList;
            });

          return results;
      }
    },
    gestion: {
      selector: (state) => state.Patients.patients
    },
    loadAll: getPatients,
    saveAll: (dispatch,datas)=>dispatch(savePatients(datas)),
    create: createPatient,
    fetch : getPatient,
    update: updatePatient
  }
export default user;