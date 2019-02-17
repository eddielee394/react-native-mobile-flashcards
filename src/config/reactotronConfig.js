import Reactotron from "reactotron-react-native";
import { Env } from "config/appConfig";

Reactotron.configure({ host: Env.localhost }) // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .connect(); // let's connect!
