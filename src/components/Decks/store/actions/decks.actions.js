import Api from "utils/Api";
export const GET_DECKS = "[DECKS] GET_DECKS]";
export const ADD_DECK = "[DECKS] ADD_DECK_SUCCESS]";

export const getDecks = decks => dispatch => {
  return dispatch({
    type: GET_DECKS,
    payload: Api.fetchDecks()
  });
};

export const addDeck = deck => {
  return {
    type: ADD_DECK,
    payload: deck
  };
};
