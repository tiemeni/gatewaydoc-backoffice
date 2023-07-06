import { combineReducers } from "redux";
import CommonReducer from "../commons/reducers";
import UserReducers from "../users/reducers";
import MotifsReducer from '../motifs/reducers'
import LieuxReducer from "../lieux/reducers";



const rootReducer = combineReducers({
    Common: CommonReducer,
    Users: UserReducers,
    Motifs: MotifsReducer,
    Lieux: LieuxReducer
})

export default rootReducer;