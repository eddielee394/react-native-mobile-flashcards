import React from "react";
import { KeepAwake, registerRootComponent, Logs } from "expo";

if (__DEV__) {
  //reacttotron config
  import("./src/config/reactotronConfig").then(() =>
    console.log("Reactotron Configured")
  );

  //Disable expoCli logs
  const isRemoteDebuggingEnabled = typeof atob !== "undefined";
  if (isRemoteDebuggingEnabled) {
    Logs.disableExpoCliLogging();
  } else {
    Logs.enableExpoCliLogging();
  }
  KeepAwake.activate();
}
console.disableYellowBox = true;

const AppEntry = () => {
  const App = require("./src/App").default;
  return <App />;
};

registerRootComponent(AppEntry);
