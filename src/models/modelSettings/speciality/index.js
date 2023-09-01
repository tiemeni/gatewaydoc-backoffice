import { saveGroups } from "../../../REDUX/groups/actions";
import { saveSpecialities } from "../../../REDUX/specialites/actions";
import { getCivilities } from "../../../services/civilities";
import { getAllCivilities } from "../../../services/commons";
import { getAllGroup } from "../../../services/groups";
import { createSpeciality, getSpecialities, updateSpeciality, getSpeciality } from "../../../services/specialities";


const speciality = {
    related: {
      loaders: [],
      selector: (state) => [],
      getRelatedValues: (d,fields=[]) => {
        // Attribuer les valeurs récupérées
            let results = [...fields]
            

          return results;
      }
    },
    gestion: {
      selector: (state) => state.Specialities.specialites
    },
    loadAll: getSpecialities,
    saveAll: (dispatch,datas)=>dispatch(saveSpecialities(datas)),
    create: createSpeciality,
    fetch : getSpeciality,
    update: updateSpeciality
  }
export default speciality;