
import { legacy_createStore, combineReducers, compose, applyMiddleware } from "redux";
import authReducer from './auth/auth.reducer'
import sellReducer from "./sell/sell.reducer"

import {
  legacy_createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from "redux";


import thunk from "redux-thunk";
import { reducer as productReducer } from "./Admin/admin.reducer";
import { bulbReducer } from "./BulbAdmin/bulbadmin.reducer";

const root_reducer = combineReducers({
	product: productReducer,
	authReducer,
	sellReducer
  product: productReducer,
  bulb: bulbReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  root_reducer,
  composeEnhancers(applyMiddleware(thunk))
);
