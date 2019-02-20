import { LOCAL_HOST, REDUX_LOGGER, API_URL } from "react-native-dotenv";
import { Constants } from "expo";

export const Env = {
  localhost: LOCAL_HOST,
  reduxLogger: REDUX_LOGGER,
  apiUrl: API_URL !== "" ? API_URL : Constants.manifest.hostUri
};
