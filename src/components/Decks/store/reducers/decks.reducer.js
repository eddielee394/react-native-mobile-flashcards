import * as Actions from "../actions";

const initialState = {
  data: {}
};

/**
 * decksReducer
 * @param state
 * @param action PARAM_1 | PARAM_2 | PARAM_3
 * @return {{}}
 */
const decksReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.GET_DECKS_SUCCESS:
      return {
        //receive the state
        ...state,
        //merge the action
        data: action.payload
      };
    case Actions.ADD_DECK_SUCCESS:
      return {
        //receive the state
        ...state,
        //merge the action
        data: { ...state.data, ...action.payload }
      };
    default:
      return state;
  }
};

export default decksReducer;
