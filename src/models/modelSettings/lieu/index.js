import { saveGroups } from "../../../REDUX/groups/actions";
import lieuAction from "../../../REDUX/lieux/actions";
import { getCivilities } from "../../../services/civilities";
import { getAllCivilities } from "../../../services/commons";
import { getAllGroup } from "../../../services/groups";
import { createLieu, getAllLieux, updateLieu, getLieu } from "../../../services/lieux";


const lieu = {
    related: {
      loaders: [],
      selector: (state) => [state.Groups.groups,state.Common.civilities],
      getRelatedValues: ([groupList, civList],fields=[]) => {
        // Attribuer les valeurs récupérées
            let results = [...fields]
            

          return results;
      }
    },
    gestion: {
      selector: (state) => state.Lieux.data || []
    },
    loadAll: getAllLieux,
    saveAll: (dispatch,datas)=>dispatch(lieuAction.save(datas)),
    create: createLieu,
    fetch : getLieu,
    update: updateLieu
  }
export default lieu;