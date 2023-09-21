import { saveGroups } from "../../../REDUX/groups/actions";
import { getCivilities } from "../../../services/civilities";
import { getAllCivilities } from "../../../services/commons";
import { getAllGroup } from "../../../services/groups";
import { createUser, getUser, updateUser } from "../../../services/users";
import actions from "../../../REDUX/civilities/actions";
import actionsPraticien from "../../../REDUX/praticiens/actions";

import professsionActions from "../../../REDUX/professions/actions";
import specialtiesActions from "../../../REDUX/specialites/actions";
import { getAllProfessions } from "../../../services/professions";
import transfromer from "../../../Utils/transformers/profession"

import { getSpecialities } from "../../../services/specialities";
import { createPraticien, editPraticien, getPraticien, getPraticiens } from "../../../services/praticiens";

const getGroups = async (dispatch, state) => {
    const groups = await getAllGroup();
    if (groups.success !== true) return;
    dispatch(saveGroups(groups.data));
  };
  
const getCiv = async (dispatch,state) => {
    const civilities = await getAllCivilities();
    if (civilities.success !== true) return;
    dispatch(actions.save(civilities.data));
};
const getProfessions = async (dispatch,state) => {
  const response = await getAllProfessions();
  if (response.success !== true) return;
  dispatch(professsionActions.save(response.data));
};
const getAllSpecialities = async (dispatch,state) => {
  const response = await getSpecialities();
  if (response.success !== true) return;
  dispatch(specialtiesActions.save(response.data));
};
const user = {
    related: {
      loaders: [getGroups, getCiv, getProfessions, getAllSpecialities],
      selector: (state) => [state.Groups.groups,state.Civilities.data,state.Professions.data, state.Specialities.specialites],
      getRelatedValues: ([groupList, civList, jobs, fonctions],fields=[]) => {
        // Attribuer les valeurs récupérées
            let results = [...fields];
            results.forEach((field) => {
              if (field.name === "groups") field.data = groupList;
              if (field.name === "civility") field.data = civList;
              if (field.name === "fonction") field.data = fonctions;
              if(field.name === "job") field.data = jobs? jobs.flatMap(transfromer.toListItem) :null;
            });
       
          return results;
      }
    },
    gestion: {
      selector: (state) => state.Praticiens.praticiens
    },
    saveAll: (dispatch,datas)=> dispatch(actionsPraticien.save(datas)),
    loadAll: getPraticiens,
    
    create: createPraticien,
    fetch : getPraticien,
    update: editPraticien
  }
export default user;