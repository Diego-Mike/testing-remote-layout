import { applyMiddleware, createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import reducers, { reducersType } from "./reducers";

export const storeConfiguration = (): Store<reducersType> =>
  createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
