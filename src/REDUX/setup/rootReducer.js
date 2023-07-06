import { combineReducers } from "redux";
import CommonReducer from "../commons/reducers";
import UserReducers from "../users/reducers";
import MotifsReducer from '../motifs/reducers'



const rootReducer = combineReducers({
    Common: CommonReducer,
    Users: UserReducers,
    Motifs: MotifsReducer,
})

export default rootReducer;