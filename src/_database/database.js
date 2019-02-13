import mock from "./mock";
import _ from "@lodash";
import { LOCAL_HOST } from "react-native-dotenv";
const localhost = LOCAL_HOST;

const db = {
  users: {},
  decks: {
    React: {
      title: "React",
      questions: [
        {
          question: "What is React?",
          answer: "A library for managing user interfaces"
        },
        {
          question: "Where do you make Ajax requests in React?",
          answer: "The componentDidMount lifecycle event"
        }
      ]
    },
    JavaScript: {
      title: "JavaScript",
      questions: [
        {
          question: "What is a closure?",
          answer:
            "The combination of a function and the lexical environment within which that function was declared."
        }
      ]
    }
  }
};

mock.onGet(`http://${localhost}/api/decks`).reply(request => {
  console.log("axios request: ", request, db.decks);
  return [200, db.decks];
});
mock.onPost("/api/decks").reply(request => {});
mock.onGet("/api/deck").reply(request => {
  // const deck = _.find();
});
mock.onPost("/api/deck").reply(request => {});
mock.onGet("/api/cards").reply(request => {});
mock.onPost("/api/cards").reply(request => {});
mock.onGet("/api/card").reply(request => {});
mock.onPost("/api/card").reply(request => {});
mock.onGet("/api/users").reply(request => {});
mock.onPost("/api/users").reply(request => {});
