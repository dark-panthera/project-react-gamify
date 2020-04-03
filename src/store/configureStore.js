import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import gamesReducer from "./reducers/games";
import authReducer from "./reducers/auth";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const combinedReducers = combineReducers({
    games: gamesReducer,
    auth: authReducer
  });

  const enhancer = composeEnhancers(applyMiddleware(thunk));
  const store = createStore(combinedReducers, enhancer);

  return store;
};
