import { saveGroups } from "../../../REDUX/groups/actions";
import { saveSpecialities } from "../../../REDUX/specialites/actions";
import { getCivilities } from "../../../services/civilities";
import { getAllCivilities } from "../../../services/commons";
import { useDispatch, useSelector } from "react-redux";
import { getAllGroup } from "../../../services/groups";
import { createMotif, editMotif, getAllMotif, getMotif } from "../../../services/motifs";
import action from "../../../REDUX/motifs/actions";
import { getSpecialities } from "../../../services/specialities";
import { getAllProfessions } from "../../../services/professions"
import { save  } from "../../../REDUX/professions/actions"

const getSpe = async (dispatch, state) => {

  const speciality = await getSpecialities();
  if (speciality.success !== true) return;
  dispatch(saveSpecialities(speciality.data));

};

const getProf = async (dispatch, state) => {

  const profession = await getAllProfessions();
  if (profession.success !== true) return;
  dispatch(save(profession.data));
};


const motif = {
    related: {
      loaders: [getSpe, getProf],
      selector: (state) => [state.Groups.groups,state.Common.civilities,state.Specialities.specialites, state.Professions.data],
      getRelatedValues: ([groupList, civList, specList, getProfList],fields=[]) => {
        // Attribuer les valeurs récupérées
            let results = [...fields]
            results.forEach((field) => {
              if (field.name === "groups") field.data = groupList;
              if (field.name === "civility") field.data = civList;
              if (field.name === "idSpeciality") field.data = specList;
              if (field.name === "idProfession") field.data = getProfList;
            });

          return results;
      }
    },
    gestion: {
      selector: (state) => state.Motifs.data||[]    
    },
    loadAll: getAllMotif,
    saveAll: (dispatch,datas)=>dispatch(action.save(datas)),
    create: createMotif,
    fetch : getMotif,
    update: editMotif
  }
export default motif;