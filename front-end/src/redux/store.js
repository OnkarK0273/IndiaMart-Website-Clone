import { legacy_createStore, combineReducers, compose, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import { reducer as productReducer } from "./Admin/admin.reducer";

const root_reducer = combineReducers({
	
	product: productReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(root_reducer, composeEnhancers(applyMiddleware(thunk)));





