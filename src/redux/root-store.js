import { createStore, combineReducers } from "redux";
import gameReducer from "./reducers/gameReducer";

const rootReducers = combineReducers({gameReducer})

export const store = createStore(rootReducers)