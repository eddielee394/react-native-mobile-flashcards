import axios from "axios";
import { Env } from "config/appConfig";

class Api {
  static fetchDecks = () => axios.get(`http://${Env.expoHostUri}/api/decks`);
  static storeDeck = data =>
    axios.post(`http://${Env.expoHostUri}/api/decks`, { data });
  static fetchDeck = params =>
    axios.get(`http://${Env.expoHostUri}/api/deck`, { params });
  static updateDeck = data =>
    axios.post(`http://${Env.expoHostUri}/api/deck`, { data });
  static fetchCards = params =>
    axios.get(`http://${Env.expoHostUri}/api/cards`, { params });
  static storeCard = data =>
    axios.post(`http://${Env.expoHostUri}/api/cards`, { data });
  static fetchCard = params =>
    axios.get(`http://${Env.expoHostUri}/api/card`, { params });
  static updateCard = data =>
    axios.post(`http://${Env.expoHostUri}/api/card`, { data });
  static fetchUsers = params =>
    axios.get(`http://${Env.expoHostUri}/api/users`, { params });
  static storeUser = data =>
    axios.post(`http://${Env.expoHostUri}/api/users`, { data });
}

export default Api;
