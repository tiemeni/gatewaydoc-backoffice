import { saveGroups } from "../../../REDUX/groups/actions";
import { getCivilities } from "../../../services/civilities";
import { getAllCivilities } from "../../../services/commons";
import { getAllGroup } from "../../../services/groups";
import { createUser, getUser, updateUser } from "../../../services/users";
import actions from "../../../REDUX/civilities/actions";
import actionsPraticien from "../../../REDUX/praticiens/actions";
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
    saveAll: (dispatch,datas)=> dispatch(actionsPraticien.save(datas)),
    loadAll: getPraticiens,
    
    create: createPraticien,
    fetch : getPraticien,
    update: editPraticien
  }
export default user;