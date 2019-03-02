import { Api, Helpers } from "utils";

export const GET_DECKS = "[DECKS] GET_DECKS";
export const STORE_DECK = "[DECKS] STORE_DECK";
export const STORE_CARD = "[DECKS] STORE_CARD";
export const UPDATE_DECKS = "[DECKS] UPDATE_DECKS";

export const getDecks = () => dispatch => {
  return dispatch({
    type: GET_DECKS,
    payload: Api.fetchDecks().then(response => response.data)
  });
};

export const storeDeck = deck => dispatch => {
  return dispatch({
    type: STORE_DECK,
    payload: Api.storeDeck(deck).then(response => response.data)
  });
};

export const storeCard = data => dispatch => {
  return dispatch({
    type: STORE_CARD,
    payload: new Promise(resolve => {
      resolve({ card: Helpers.formatCard(data.card), deckId: data.deckId });
    })
  }).then(() => dispatch(updateDecks()));
};

export const updateDecks = () => (dispatch, getState) => {
  const { decks } = getState();
  return {
    type: UPDATE_DECKS,
    payload: Api.updateDecks(decks.data)
  };
};
