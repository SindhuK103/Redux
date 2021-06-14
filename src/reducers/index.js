import CounterReducer from "./Counter";
import rightsReducer from "./accessRights";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    counter: CounterReducer,
    accessRights: rightsReducer
})

export default allReducers;