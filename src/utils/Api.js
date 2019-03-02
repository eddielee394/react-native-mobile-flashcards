import axios from "axios";
import { Env } from "config/appConfig";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.baseURL = Env.apiUrl;

class Api {
  static fetchDecks = () => axios.get("/decks");
  static updateDecks = data => axios.put("/decks", data);
  static storeDeck = data => axios.post("/decks", data);
  static storeCard = data => axios.put("/decks", { data });
}

export default Api;
