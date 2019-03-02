import React from "react";
import { Button, Footer, FooterTab, Icon, Text } from "native-base";
import { Actions as RouteActions } from "react-native-router-flux";

const FooterNav = props => {
  return (
    <Footer>
      <FooterTab>
        <Button
          vertical
          onPress={() => {
            RouteActions.deckList();
          }}
        >
          <Icon name="md-today" />
          <Text>Decks</Text>
        </Button>
        <Button
          vertical
          onPress={() => {
            RouteActions.addDeck();
          }}
        >
          <Icon name="ios-add-circle" />
          <Text>Add Deck</Text>
        </Button>
        <Button vertical>
          <Icon name="ios-speedometer" />
          <Text>Info</Text>
        </Button>
      </FooterTab>
    </Footer>
  );
};

export default FooterNav;
