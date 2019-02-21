import moment from "moment";

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
}

export default Helpers;
