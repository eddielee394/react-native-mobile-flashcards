import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import {
  Tabs,
  Tab,
  ScrollableTab,
  Grid,
  Col,
  Row,
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
              <View style={styles.container}>
                <Button
                  success
                  onPress={() => console.log("correct button pressed")}
                >
                  <Icon name="md-checkmark-circle-outline" />
                  <Text>Correct</Text>
                </Button>
                <Button
                  danger
                  onPress={() => console.log("incorrect button pressed")}
                >
                  <Icon name="md-close" />
                  <Text>Incorrect</Text>
                </Button>
              </View>
            </Tab>
          ))}
        </Tabs>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    padding: 10
  }
});

export default CardList;
