import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import DeckList from "components/Decks/DeckList";

export default class AddDeckScreen extends React.Component {
  static navigationOptions = {
    title: "Links"
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <DeckList />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});
