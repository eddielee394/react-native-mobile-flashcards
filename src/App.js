import React, { Component } from "react";
import { StatusBar } from "react-native";
import { AppNavigator } from "navigation";
import { Provider } from "react-redux";
import { persistor, store } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { StyleProvider, Icon } from "native-base";
import { Container } from "native-base";
import material from "./config/native-base-theme/variables/material";
import getTheme from "./config/native-base-theme/components";
import { Router } from "react-native-router-flux";
import FooterNav from "components/Nav/FooterNav";

class App extends Component {
  state = {
    isLoadingComplete: false
  };

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <StyleProvider style={getTheme(material)}>
            <Container>
              <StatusBar
                style={{ backgroundColor: material.toolbarDefaultBg }}
              />
              <Router>{AppNavigator}</Router>
              <FooterNav />
            </Container>
          </StyleProvider>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
