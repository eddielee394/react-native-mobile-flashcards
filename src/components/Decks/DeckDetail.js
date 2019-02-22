import React, { Component } from "react";
import {
  Content,
  Text,
  Card,
  CardItem,
  Left,
  Body,
  Button,
  Icon,
  Right
} from "native-base";
import { connect } from "react-redux";
import { Image } from "react-native";
import { CardList } from "components/Cards";
import { Helpers } from "utils";
import material from "config/native-base-theme/variables/material";
import { Actions as RouteActions } from "react-native-router-flux";
class DeckDetail extends Component {
  render() {
    const { deck } = this.props;
    console.log("DeckDetail props", this.props);

    return (
      <Content padder>
        <Card>
          <CardItem>
            <Left>
              <Body>
                <Text>{deck.title}</Text>
              </Body>
              <Button small transparent iconLeft>
                <Icon
                  active
                  name="clock"
                  style={{ color: material.colors.blue }}
                />
                <Text style={{ fontSize: 10 }}>
                  {Helpers.formatDate(deck.timestamp)}
                </Text>
              </Button>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image
              source={{ uri: deck.imgUrl }}
              style={{ height: 200, width: null, flex: 1 }}
            />
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent iconLeft>
                <Icon active name="albums" />
                <Text>{deck.cards.length} Cards</Text>
              </Button>
            </Left>
            <Right>
              <Button
                block
                iconLeft
                info
                onPress={() => RouteActions.addCard()}
              >
                <Icon active name="md-add-circle" />
                <Text>Add Card</Text>
              </Button>
            </Right>
          </CardItem>
        </Card>
        <CardList cards={deck.cards} />
      </Content>
    );
  }
}

function mapStateToProps({ decks }, props) {
  const deck = decks.data.find(deck => {
    return deck.id === props.itemId;
  });

  return {
    deck: deck
  };
}
export default connect(mapStateToProps)(DeckDetail);
