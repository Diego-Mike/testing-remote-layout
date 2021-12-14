import { combineReducers } from "redux";

import layoutReducer from "./layoutReducer";

const reducers = combineReducers({ layoutReducer });

export type reducersType = ReturnType<typeof reducers>;

export default reducers;
