import { combineReducers } from "redux";
import CommonReducer from "../commons/reducers";
import UserReducers from "../users/reducers";
import MotifsReducer from '../motifs/reducers'
import LieuxReducer from "../lieux/reducers";
import GroupReducers from "../groups/reducer";
import specialitiesReducers from "../specialites/reducers";
import PatientReducers from "../patients/reducer";
import PraticiensReducer from "../praticiens/reducer";



const rootReducer = combineReducers({
    Common: CommonReducer,
    Users: UserReducers,
    Groups: GroupReducers,
    Specialities: specialitiesReducers,
    Patients: PatientReducers,
    Praticiens: PraticiensReducer,
    Motifs: MotifsReducer,
    Lieux: LieuxReducer,
})

export default rootReducer;