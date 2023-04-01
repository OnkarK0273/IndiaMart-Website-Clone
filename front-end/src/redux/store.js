import { legacy_createStore, combineReducers, compose, applyMiddleware } from "redux";
import authReducer from './auth/auth.reducer'
import sellReducer from "./sell/sell.reducer"
import thunk from "redux-thunk";
import { reducer as productReducer } from "./Admin/admin.reducer";

const root_reducer = combineReducers({
	
	product: productReducer,
	authReducer,
	sellReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(root_reducer, composeEnhancers(applyMiddleware(thunk)));





