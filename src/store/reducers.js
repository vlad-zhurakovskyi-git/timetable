import { combineReducers } from "redux"
import { timeTableReducer } from "./timeTable/reducers";

export default combineReducers({
    timeTable: timeTableReducer
});
