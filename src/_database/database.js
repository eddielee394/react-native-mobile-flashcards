import mock from "./mock";
import _ from "@lodash";
import { Env } from "config/appConfig";

export const db = {
  users: {},
  decks: [
    {
      id: "react",
      title: "React",
      imgUrl:
        "https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg",
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
    {
      id: "javascript",
      title: "JavaScript",
      imgUrl:
        "https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg",
      questions: [
        {
          question: "What is a closure?",
          answer:
            "The combination of a function and the lexical environment within which that function was declared."
        }
      ]
    },
    {
      id: "react-native",
      title: "React Native",
      imgUrl:
        "https://images.pexels.com/photos/908284/pexels-photo-908284.jpeg",
      questions: [
        {
          question: "What is React Native?",
          answer:
            "A framework based on ReactJS used to create mobile apps using javascript"
        }
      ]
    }
  ]
};

mock.onGet(`http://${Env.expoHostUri}/api/decks`).reply(request => {
  console.log("database request: ", request);
  return [200, db.decks];
});

mock.onGet(`http://${Env.expoHostUri}/api/decks`).reply(request => {
  return [200, db.decks];
});
mock.onPost(`http://${Env.expoHostUri}/api/decks`).reply(request => {});
mock.onGet(`http://${Env.expoHostUri}/api/deck`).reply(request => {
  // const deck = _.find();
});
mock.onPost(`http://${Env.expoHostUri}/api/deck`).reply(request => {});
mock.onGet(`http://${Env.expoHostUri}/api/cards`).reply(request => {});
mock.onPost(`http://${Env.expoHostUri}/api/cards`).reply(request => {});
mock.onGet(`http://${Env.expoHostUri}/api/card`).reply(request => {});
mock.onPost(`http://${Env.expoHostUri}/api/card`).reply(request => {});
mock.onGet(`http://${Env.expoHostUri}/api/users`).reply(request => {});
mock.onPost(`http://${Env.expoHostUri}/api/users`).reply(request => {});
