/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import { AppRegistry } from "react-native";
import App from "./src/App";
import { name as appName } from "./app.json";

if (__DEV__) {
  //reacttotron config
  import("./src/config/reactotronConfig").then(() =>
    console.log("Reactotron Configured")
  );
}

console.disableYellowBox = true;

AppRegistry.registerComponent(appName, () => App);
