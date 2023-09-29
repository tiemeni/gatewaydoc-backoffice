import { saveGroups } from "../../../REDUX/groups/actions";
import actions from "../../../REDUX/civilities/actions";
import { getCivilities } from "../../../services/civilities";
import { getAllCivilities } from "../../../services/commons";
import { getAllGroup } from "../../../services/groups";
import { createUser, getUser, updateUser, getUsers } from "../../../services/users";
import { saveUsers } from "../../../REDUX/users/actions";
import { save } from "../../../REDUX/professions/actions"
import { getAllProfessions } from "../../../services/professions"

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

const getProf = async (dispatch, state) => {

  const profession = await getAllProfessions();
  if (profession.success !== true) return;
  dispatch(save(profession.data));
};

const user = {
    related: {
      loaders: [getGroups, getCiv, getProf],
      selector: (state) => [state.Groups.groups,state.Civilities.data,state.Professions.data],
      getRelatedValues: ([groupList, civList, getProfList],fields=[]) => {
        // Attribuer les valeurs récupérées
            let results = [...fields]
            results.forEach((field) => {
              if (field.name === "groups") field.data = groupList;
              if (field.name === "civility") field.data = civList;
              if (field.name === "job") field.data = getProfList;
            });

          return results;
      }
    },
    gestion: {
      selector: (state) => state.Users.users
    },
    loadAll: getUsers,
    saveAll: (dispatch, datas)=> dispatch(saveUsers(datas)),
    create: createUser,
    fetch : getUser,
    update: updateUser
  }
export default user;