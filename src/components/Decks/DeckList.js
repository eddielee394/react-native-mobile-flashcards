import React, { Component } from "react";
import { View, Text } from "react-native";
import * as Actions from "components/Decks/store/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Slider } from "components/UI";
import { Content, Tabs, ScrollableTab, Header, Tab } from "native-base";

class DeckList extends Component {
  componentDidMount() {
    this.props.getDecks();
  }

  render() {
    const { decks } = this.props;

    return (
      <Content>
        <Text>DeckList</Text>
        <Slider data={decks} />
      </Content>
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
