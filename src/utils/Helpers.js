import moment from "moment";
import faker from "faker";

class Helpers {
  static formatDate = (timestamp, relative = true) => {
    const d = new Date(timestamp);

    if (relative) {
      return moment.utc(d).fromNow();
    }

    const formattedDate = moment
      .utc(d)
      .local()
      .format("M/DD/YYYY");

    const formattedTime = moment
      .utc(timestamp)
      .local()
      .format("h:mm A");

    return formattedTime + " | " + formattedDate;
  };

  static formatCard = ({ question, answer }) => {
    const card = {
      id: faker.random.uuid(),
      question: question,
      answer: answer,
      timestamp: Date.now()
    };

    return card;
  };

  static formatDeck = ({ title, imgUrl }) => {
    const deck = {
      id: faker.random.uuid(),
      title: title,
      imgUrl: imgUrl,
      cards: [],
      timestamp: Date.now()
    };

    return deck;
  };
}

export default Helpers;
