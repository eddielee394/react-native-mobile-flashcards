import axios from "axios";
import { LOCAL_HOST } from "react-native-dotenv";
const localhost = LOCAL_HOST;

class Api {
  static fetchDecks = () =>
    axios.get(`http://${localhost}/api/decks`).then(function(response) {
      console.log("fetchDecks", response.data);
    });
  static storeDeck = data => axios.post("/api/decks", { data });
  static fetchDeck = params => axios.get("/api/deck", { params });
  static updateDeck = data => axios.post("/api/deck", { data });
  static fetchCards = params => axios.get("/api/cards", { params });
  static storeCard = data => axios.post("/api/cards", { data });
  static fetchCard = params => axios.get("/api/card", { params });
  static updateCard = data => axios.post("/api/card", { data });
  static fetchUsers = params => axios.get("/api/users", { params });
  static storeUser = data => axios.post("/api/users", { data });
}

export default Api;
