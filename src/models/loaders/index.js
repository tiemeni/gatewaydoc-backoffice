import { getAllProfessions } from "../../services/professions";
import { getSpecialities } from "../../services/specialities";
import professsionActions from "../../REDUX/professions/actions";
import specialtiesActions from "../../REDUX/specialites/actions";
import lieuxActions from "../../REDUX/lieux/actions";
import { getAllLieux } from "../../services/lieux";


export const getProfessions = async (dispatch,state) => {
    const response = await getAllProfessions();
    if (response.success !== true) return;
    dispatch(professsionActions.save(response.data));
  };
export const getAllSpecialities = async (dispatch,state) => {
    const response = await getSpecialities();
    if (response.success !== true) return;
    dispatch(specialtiesActions.save(response.data));
};

export const getLieux = async (dispatch,state) => {
    const response = await getAllLieux();
    if (response.success !== true) return;
    dispatch(lieuxActions.save(response.data));
};


export default {
    getAllSpecialities,
    getProfessions,
    getLieux
}