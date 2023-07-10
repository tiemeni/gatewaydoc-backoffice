import { combineReducers } from "redux";
import CommonReducer from "../commons/reducers";
import UserReducers from "../users/reducers";
import MotifsReducer from '../motifs/reducers'
import LieuxReducer from "../lieux/reducers";
import GroupReducers from "../groups/reducer";



const rootReducer = combineReducers({
    Common: CommonReducer,
    Users: UserReducers,
    Motifs: MotifsReducer,
    Lieux: LieuxReducer,
    Groups: GroupReducers
})

export default rootReducer;