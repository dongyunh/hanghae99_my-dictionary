import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import dict from "./modules/dict";

const rootReducer = combineReducers({ dict });
const middlewares = [thunk];
//enhancer 옵션모임
const enhancer = applyMiddleware(...middlewares);

const store = createStore(rootReducer, enhancer);

export default store;
