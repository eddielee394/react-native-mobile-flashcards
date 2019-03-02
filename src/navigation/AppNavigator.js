import React from "react";
import { Scene, Stack } from "react-native-router-flux";

//component views
import { CardDetail, AddCard } from "components/Cards";
import { AddDeck, DeckDetail, DeckList } from "components/Decks";

const rootRoutes = [
  {
    key: "deckDetail",
    component: DeckDetail,
    title: "Deck",
    path: "/decks/:id/"
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
  },
  { key: "addCard", component: AddCard, title: "Add Card" }
];

const rootScreens = rootRoutes.map(route => {
  return (
    <Scene
      hideNavBar={true}
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
      path={route.path ? route.path : ""}
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
