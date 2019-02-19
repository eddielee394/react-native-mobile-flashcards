import React, { Component } from "react";
import { View, Text } from "react-native";
import { withNavigation } from "react-navigation";

class CardDetail extends Component {
  render() {
    return (
      <View>
        <Text>CardDetail</Text>
      </View>
    );
  }
}

export default withNavigation(CardDetail);
