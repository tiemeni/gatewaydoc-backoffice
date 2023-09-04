import { createCivilites, getCivilities, getCivility, updateCivilites } from "../../../services/civilities";
import { getAllCivilities } from "../../../services/commons";
import { getAllGroup } from "../../../services/groups";
import { createUser, getUser, updateUser } from "../../../services/users";
import actions from "../../../REDUX/civilities/actions";
import app from "../../../Configs/app";


const civility = {
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
      selector: (state) => state.Civilities.data||[]
    },
    loadAll: getAllCivilities,
    saveAll: (dispatch,datas)=>dispatch(actions.save(datas)),
    create: createCivilites,
    fetch : getCivility,
    update: updateCivilites
  }
export default civility;