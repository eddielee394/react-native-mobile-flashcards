import React, { Component } from "react";
import { View } from "react-native";
import {
  Tabs,
  Tab,
  ScrollableTab,
  Grid,
  Col,
  Button,
  Icon,
  Text
} from "native-base";
import { CardDetail } from "components/Cards";
import material from "config/native-base-theme/variables/material";

class CardList extends Component {
  render() {
    const { cards } = this.props;

    return (
      <View>
        <Tabs
          renderTabBar={() => <ScrollableTab />}
          style={[material.contentPaddingTop, material.androidShadow3]}
        >
          {cards.map((card, index) => (
            <Tab key={index} heading={card.question}>
              <CardDetail key={index} card={card} />
              <Grid>
                <Col>
                  <Button onPress={() => console.log("correct button pressed")}>
                    <Icon name="success" />
                    <Text>Correct</Text>
                  </Button>
                </Col>
                <Col>
                  <Button
                    onPress={() => console.log("incorrect button pressed")}
                  >
                    <Icon name="error" />
                    <Text>Incorrect</Text>
                  </Button>
                </Col>
              </Grid>
            </Tab>
          ))}
        </Tabs>
      </View>
    );
  }
}

export default CardList;
