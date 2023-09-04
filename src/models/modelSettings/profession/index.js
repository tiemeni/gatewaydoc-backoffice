
import { getAllGroup } from "../../../services/groups";
import { createProfession, getAllProfessions, getProfession, updateProfession, } from "../../../services/professions"
import actions from "../../../REDUX/professions/actions";
const profession = {
    related: {
      loaders: [],
      selector: (state) => [],
      getRelatedValues: ([],fields=[]) => {
        // Attribuer les valeurs récupérées
            let results = [...fields]
            

          return results;
      }
    },
    gestion: {
      selector: (state) => state.Professions.data||[]
    },
    loadAll: getAllProfessions,
    saveAll: (dispatch,datas)=>dispatch(actions.save(datas)),
    create: createProfession,
    fetch : getProfession,
    update: updateProfession
  }
export default profession;