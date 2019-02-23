import * as Actions from "../actions";
import _ from "@lodash";

const initialState = {
  data: []
};

/**
 * decksReducer
 * @param state
 * @param action PARAM_1 | PARAM_2 | PARAM_3
 * @return {{}}
 */
const decksReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${Actions.GET_DECKS}_SUCCESS`:
      return {
        //receive the state
        ...state,
        //merge the action
        data: action.payload
      };
    case `${Actions.STORE_DECK}_SUCCESS`:
      return {
        //receive the state
        ...state,
        //merge the action
        data: { ...state.data, ...action.payload }
      };
    case `${Actions.STORE_CARD}_SUCCESS`:
      const deckIndex = _.findIndex(state.data, { id: action.payload.deckId });

      const deck = state.data.find(deck => deck.id === action.payload.deckId);

      const updatedDeck = {
        ...deck,
        cards: deck.cards.concat(action.payload.card)
      };

      let updatedDecks = [];
      updatedDecks = [
        ...state.data.slice(0, deckIndex),
        {
          ...state.data[deckIndex],
          ...updatedDeck
        },
        ...state.data.slice(deckIndex + 1)
      ];

      return {
        ...state,
        data: updatedDecks
      };
    default:
      return state;
  }
};

export default decksReducer;
