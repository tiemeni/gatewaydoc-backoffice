import { createGroup, getAllGroup, getGroup, updateGroup,  } from "../../../services/groups";
import action from '../../../REDUX/groups/actions'

const groupe = {
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
      selector: (state) => state.Groups.groups || []
    },
    loadAll: getAllGroup,
    saveAll: (dispatch,datas)=>dispatch(action.save(datas)),
    create: createGroup,
    fetch : getGroup,
    update: updateGroup  
}
export default groupe;