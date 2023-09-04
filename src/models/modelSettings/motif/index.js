import { saveGroups } from "../../../REDUX/groups/actions";
import { getCivilities } from "../../../services/civilities";
import { getAllCivilities } from "../../../services/commons";
import { getAllGroup } from "../../../services/groups";
import { createMotif, editMotif, getAllMotif, getMotif } from "../../../services/motifs";
import action from "../../../REDUX/motifs/actions";


const motif = {
    related: {
      loaders: [],
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
      selector: (state) => state.Motifs.data||[]    
    },
    loadAll: getAllMotif,
    saveAll: (dispatch,datas)=>dispatch(action.save(datas)),
    create: createMotif,
    fetch : getMotif,
    update: editMotif
  }
export default motif;