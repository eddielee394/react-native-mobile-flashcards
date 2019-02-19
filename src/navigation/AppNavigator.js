import React from "react";
import { Scene, Stack } from "react-native-router-flux";

//component views
import { CardDetail } from "components/Cards";
import { AddDeck, DeckDetail, DeckList } from "components/Decks";

const rootRoutes = [
  {
    key: "deckDetail",
    component: DeckDetail,
    title: "Deck"
  },
  { key: "cardDetail", component: CardDetail, title: "Card" }
];

const navRoutes = [
  {
    key: "deckList",
    component: DeckList,
    title: "Decks",
    initial: true
  },
  {
    key: "addDeck",
    component: AddDeck,
    title: "Add Deck"
  }
];

const rootScreens = rootRoutes.map(route => {
  return (
    <Scene
      key={route.key}
      component={route.component}
      title={route.title}
      initial={route.initial ? route.initial : false}
    />
  );
});

const navScreens = navRoutes.map(route => {
  return (
    <Scene
      key={route.key}
      component={route.component}
      title={route.title}
      initial={route.initial ? route.initial : false}
    />
  );
});

export const AppNavigator = (
  <Stack key="root">
    {navScreens}
    {rootScreens}
  </Stack>
);

console.log("AppNavigator", AppNavigator);
