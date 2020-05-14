import {dogReducer} from "./reducers";
import {combineReducers, createStore} from "redux";

const reducers = combineReducers({
    dogReducer: dogReducer
});

export const store = createStore(reducers);