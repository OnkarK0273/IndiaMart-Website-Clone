import {
  legacy_createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from "redux";
import authReducer from "./auth/auth.reducer";
import thunk from "redux-thunk";
import { reducer as productReducer } from "./Admin/admin.reducer";
import { bulbReducer } from "./BulbAdmin/bulbadmin.reducer";

const root_reducer = combineReducers({
  product: productReducer,
  bulb: bulbReducer,
  authReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  root_reducer,
  composeEnhancers(applyMiddleware(thunk))
);
