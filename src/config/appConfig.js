import { LOCAL_HOST, REDUX_LOGGER } from "react-native-dotenv";
import { Constants } from "expo";

export const Env = {
  localhost: LOCAL_HOST,
  reduxLogger: REDUX_LOGGER,
  expoHostUri: Constants.manifest.hostUri
};
