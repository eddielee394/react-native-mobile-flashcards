import Reactotron from "reactotron-react-native";
import { LOCAL_HOST } from "react-native-dotenv";

Reactotron.configure({ host: LOCAL_HOST }) // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .connect(); // let's connect!
