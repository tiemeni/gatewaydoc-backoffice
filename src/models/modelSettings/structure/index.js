import { saveGroups } from "../../../REDUX/groups/actions";
import { getCivilities } from "../../../services/civilities";
import { getAllCivilities } from "../../../services/commons";
import { getAllGroup } from "../../../services/groups";
import { getAllProfessions } from "../../../services/professions";
import { createStructure, getStructure, updateStructure } from "../../../services/structures";
import { getStructures } from '../../../services/structures'
import { saveStructures } from "../../../REDUX/structures/actions";

const structure = {
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
      selector: (state) => state.Structure.structutres ||[]
    },
    loadAll: getStructures,
    saveAll: (dispatch,datas)=>dispatch(saveStructures(datas)),
    create: createStructure,
    fetch : getStructure,
    update: updateStructure
  }
export default structure;