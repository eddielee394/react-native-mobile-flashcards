import { combineReducers } from "redux";
import decks from "components/Decks/store/reducers";

const createReducer = asyncReducers =>
  combineReducers({
    decks,
    ...asyncReducers
  });

export default createReducer;
