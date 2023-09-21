import { saveGroups } from "../../../REDUX/groups/actions";
import { getCivilities } from "../../../services/civilities";
import { getAllCivilities } from "../../../services/commons";
import { getAllGroup } from "../../../services/groups";
import { createMotif, editMotif, getAllMotif, getMotif } from "../../../services/motifs";
import action from "../../../REDUX/motifs/actions";

import transfromer from "../../../Utils/transformers/profession";
import {getProfessions, getAllSpecialities, getLieux } from '../../loaders';

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