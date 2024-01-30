import {combineReducers} from "redux";
import documentReducer from "./document";
import assetDataReducer from "./assetData";

const rootReducer = combineReducers({
    documentReducer,
    assetDataReducer
});

export default rootReducer;
