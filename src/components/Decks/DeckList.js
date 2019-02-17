import React, { Component } from "react";
import { View, Text } from "react-native";
import * as Actions from "components/Decks/store/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class DeckList extends Component {
  componentDidMount() {
    this.props.getDecks();
  }

  render() {
    const { decks } = this.props;

    return (
      <View>
        <Text>DeckList</Text>
        {decks.map(deck => (
          <Text key={deck.id}>{deck.title}</Text>
        ))}
      </View>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getDecks: Actions.getDecks
    },
    dispatch
  );
}

function mapStateToProps({ decks }) {
  //do logic

  //pass from store to component
  return {
    decks: decks.data
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckList);
