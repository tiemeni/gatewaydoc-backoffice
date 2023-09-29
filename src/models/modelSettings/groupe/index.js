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
    filters: {
      selector: (state)=> state.Groups.filters || {}
    },
    paginnations: {
      selector: (state)=> state.Groups.paginations || {}
    },
    loadAll: getAllGroup,
    saveAll: (dispatch,datas)=>dispatch(action.save(datas)),
    updateFilters: (dispatch,datas)=>dispatch(action.saveFilters(datas)),
    updatePaginations: (dispatch,datas)=>dispatch(action.savePaginations(datas)),
    create: createGroup,
    fetch : getGroup,
    update: updateGroup  
}
export default groupe;