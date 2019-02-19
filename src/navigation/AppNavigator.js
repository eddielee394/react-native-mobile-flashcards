import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import MainTabNavigator from "./MainTabNavigator";
import AddDeckScreen from "screens/AddDeckScreen";

//component views
import DeckDetail from "components/Decks/DeckDetail";
import CardDetail from "components/Cards/CardDetail";

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Main: MainTabNavigator,
    DeckDetail: { screen: DeckDetail },
    CardDetail: { screen: CardDetail }
  })
);
