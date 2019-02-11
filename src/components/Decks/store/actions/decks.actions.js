export const GET_DECKS_SUCCESS = "[DECKS] GET_DECKS_SUCCESS]";
export const ADD_DECK_SUCCESS = "[DECKS] ADD_DECK_SUCCESS]";

export const getDecks = decks => {
  return {
    type: GET_DECKS_SUCCESS,
    payload: decks
  };
};

export const addDeck = deck => {
  return {
    type: ADD_DECK_SUCCESS,
    payload: deck
  };
};
