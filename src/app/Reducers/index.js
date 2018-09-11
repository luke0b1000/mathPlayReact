import { combineReducers } from "redux";
import LevelReducer from "./LevelReducer";
import MathOperationReducer from "./MathOperationReducer";

export default combineReducers({
    LevelReducer,
    MathOperationReducer
});
