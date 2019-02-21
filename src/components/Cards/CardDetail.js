import React, { Component } from "react";
import { Container, Content, Text } from "native-base";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import CardFlip from "react-native-card-flip";
import material from "config/native-base-theme/variables/material";

class CardDetail extends Component {
  render() {
    const { card } = this.props;
    return (
      <View style={styles.container}>
        <CardFlip
          style={styles.cardContainer}
          ref={_card => (this.card = _card)}
        >
          <TouchableOpacity
            activeOpacity={1}
            style={[styles.card, styles.card1]}
            onPress={() => this.card.flip()}
          >
            <Text style={styles.label}>{card.question}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={1}
            style={[styles.card, styles.card2]}
            onPress={() => this.card.flip()}
          >
            <Text style={styles.label}>{card.answer}</Text>
          </TouchableOpacity>
        </CardFlip>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    paddingTop: 15,
    paddingBottom: 25
  },
  cardContainer: {
    width: 320,
    height: 160
  },
  card: {
    flex: 1,
    justifyContent: "center",
    width: 320,
    height: 160,
    backgroundColor: "#FE474C",
    borderRadius: 5,
    shadowColor: "rgba(0,0,0,0.5)",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.5,
    elevation: 3
  },
  card1: {
    backgroundColor: material.brandPrimary
  },
  card2: {
    backgroundColor: material.colors.blue
  },
  label: {
    padding: 10,
    lineHeight: 28,
    textAlign: "center",
    fontSize: 20,
    // fontFamily: "System",
    color: "#ffffff",
    backgroundColor: "transparent"
  }
});

export default CardDetail;
