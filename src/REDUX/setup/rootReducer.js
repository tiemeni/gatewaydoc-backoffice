import { combineReducers } from "redux";
import CommonReducer from "../commons/reducers";
import UserReducers from "../users/reducers";
import GroupReducers from "../groups/reducer";
import PatientReducers from "../patients/reducer";


const rootReducer = combineReducers({
    Common: CommonReducer,
    Users: UserReducers,
    Groups: GroupReducers,
    Patients: PatientReducers
})

export default rootReducer;