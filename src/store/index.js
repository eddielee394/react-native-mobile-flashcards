import { compose, createStore } from "redux";
import * as reduxModule from "redux";
import { default as applyMiddleware } from "../middleware";
import createReducer from "./reducers";
import { persistStore, persistReducer } from "redux-persist";
import { AsyncStorage } from "react-native";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

// noinspection JSUnresolvedVariable
/**
 * Fix for Firefox redux dev tools extension
 * https://github.com/zalmoxisus/redux-devtools-instrument/pull/19#issuecomment-400637274
 * @type {string}
 */
reduxModule.__DO_NOT_USE__ActionTypes.REPLACE = "@@redux/INIT";

// noinspection JSUnresolvedVariable
/**
 * Root Enhancer
 *
 */
const composeEnhancers =
  process.env.NODE_ENV !== "production" &&
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        serialize: true,
        trace: true
      })
    : compose;

const enhancer = composeEnhancers(applyMiddleware);

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  timeout: 0,
  stateReconciler: autoMergeLevel2
};

const persistedReducer = persistReducer(persistConfig, createReducer());
const store = createStore(persistedReducer, enhancer);
const persistor = persistStore(store);

/**
 * Redux perist purge()
 * @desc purges redux store & async storage
 */
// persistor.purge();

export { store, persistor };
