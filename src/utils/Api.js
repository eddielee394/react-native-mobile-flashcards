import axios from "axios";
import { Env } from "config/appConfig";

class Api {
  static fetchDecks = () => axios.get(`${Env.apiUrl}/api/decks`);
  static storeDeck = data => axios.post(`${Env.apiUrl}/api/decks`, { data });
  static fetchDeck = params => axios.get(`${Env.apiUrl}/api/deck`, { params });
  static updateDeck = data => axios.post(`${Env.apiUrl}/api/deck`, { data });
  static fetchCards = params =>
    axios.get(`${Env.apiUrl}/api/cards`, { params });
  static storeCard = data => axios.post(`${Env.apiUrl}/api/cards`, { data });
  static fetchCard = params => axios.get(`${Env.apiUrl}/api/card`, { params });
  static updateCard = data => axios.post(`${Env.apiUrl}/api/card`, { data });
  static fetchUsers = params =>
    axios.get(`${Env.apiUrl}/api/users`, { params });
  static storeUser = data => axios.post(`${Env.apiUrl}/api/users`, { data });
}

export default Api;
