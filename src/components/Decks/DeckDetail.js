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
              <Button transparent>
                <Icon active name="thumbs-up" />
                <Text>12 Likes</Text>
              </Button>
            </Left>
            <Body>
              <Button transparent>
                <Icon active name="albums" />
                <Text>{deck.cards.length} Cards</Text>
              </Button>
            </Body>
            <Right>
              <Button transparent>
                <Icon
                  active
                  name="clock"
                  style={{ color: material.colors.blue }}
                />
                <Text style={{ fontSize: 12 }}>
                  {Helpers.formatDate(deck.timestamp)}
                </Text>
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
