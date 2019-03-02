import { combineReducers } from "redux";
import decks from "components/Decks/store/reducers";
import quizReducer from "components/Cards/store/reducers";

const createReducer = asyncReducers =>
  combineReducers({
    decks, quizReducer,
    ...asyncReducers
  });

export default createReducer;
