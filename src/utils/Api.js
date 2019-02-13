import axios from "axios";

class Api {
  static fetchDecks = () => axios.get("/api/decks", { params });
  static storeDeck = () => axios.post("/api/decks", { data });
  static fetchDeck = () => axios.get("/api/deck", { params });
  static updateDeck = () => axios.post("/api/deck", { data });
  static fetchCards = () => axios.get("/api/cards", { params });
  static storeCard = () => axios.post("/api/cards", { data });
  static fetchCard = () => axios.get("/api/card", { params });
  static updateCard = () => axios.post("/api/card", { data });
  static fetchUsers = () => axios.get("/api/users", { params });
  static storeUser = () => axios.post("/api/users", { data });
}
