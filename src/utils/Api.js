import axios from "axios";
import { Env } from "config/appConfig";

class Api {
  static fetchDecks = () => axios.get(`${Env.apiUrl}/decks`);
  static storeDeck = data => axios.post(`${Env.apiUrl}/decks`, { data });
  static fetchDeck = params => axios.get(`${Env.apiUrl}/deck`, { params });
  static updateDeck = data => axios.post(`${Env.apiUrl}/deck`, { data });
  static fetchCards = params => axios.get(`${Env.apiUrl}/cards`, { params });
  static storeCard = data => axios.post(`${Env.apiUrl}/cards`, { data });
  static fetchCard = params => axios.get(`${Env.apiUrl}/card`, { params });
  static updateCard = data => axios.post(`${Env.apiUrl}/card`, { data });
  static fetchUsers = params => axios.get(`${Env.apiUrl}/users`, { params });
  static storeUser = data => axios.post(`${Env.apiUrl}/users`, { data });
}

export default Api;
