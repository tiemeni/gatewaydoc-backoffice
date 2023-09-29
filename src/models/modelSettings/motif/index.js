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
import {getProfessions, getAllSpecialities, getLieux } from '../../loaders';
import transfromer from "../../../Utils/transformers/profession";

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
      loaders: [getProfessions, getAllSpecialities, getLieux],
      selector: (state) => [state.Professions.data, state.Specialities.specialites, state.Lieux.data],
      getRelatedValues: ([ jobs, fonctions, lieux],fields=[]) => {
        // Attribuer les valeurs récupérées
            let results = [...fields]
            results.forEach((field) => {
             
              if(field.name === "idProfession") field.data = jobs? jobs.flatMap(transfromer.toListItem) :null;
              if (field.name === "idSpeciality") field.data = fonctions;
              if (field.name === "idCentre") field.data = lieux;
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