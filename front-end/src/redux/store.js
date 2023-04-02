

import { legacy_createStore, combineReducers, compose, applyMiddleware } from "redux";
import authReducer from './auth/auth.reducer'
import sellReducer from "./sell/sell.reducer"




import thunk from "redux-thunk";
import { reducer as productReducer } from "./Admin/admin.reducer";
import { bulbReducer } from "./BulbAdmin/bulbadmin.reducer";
import { machineReducer } from "./MachineAdmin/machineadmin.reducer";

const root_reducer = combineReducers({
	authReducer,
	sellReducer,
  product: productReducer,
  bulb: bulbReducer,
  machine: machineReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  root_reducer,
  composeEnhancers(applyMiddleware(thunk))
);
