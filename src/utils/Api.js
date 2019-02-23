import axios from "axios";
import { Env } from "config/appConfig";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.baseURL = Env.apiUrl;

class Api {
  static fetchDecks = () => axios.get("/decks");
  static updateDecks = data => axios.post("/decks", { data });
  static storeDeck = data => axios.post("/decks", { data });
  static fetchDeck = params => axios.get(`/decks/${params.id}`, { params });
  static updateDeck = data =>
    axios.put(`/decks/${data.deckId}`, { data: data });
  static fetchCards = params => axios.get("/cards", { params });
  static storeCard = data => axios.put("/decks", { data });
  static fetchCard = params => axios.get("/cards", { params });
  static updateCard = data => axios.post("/cards", { data });
  static fetchUsers = params => axios.get("/users", { params });
  static storeUser = data => axios.post("/users", { data });
}

export default Api;
