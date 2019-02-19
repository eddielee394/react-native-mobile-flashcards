import React, { Component } from "react";
import { View, Text } from "react-native";
import * as Actions from "components/Decks/store/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Slider } from "components/UI";
import { Content, Tabs, ScrollableTab, Header, Tab } from "native-base";
import { withNavigation } from "react-navigation";

class DeckList extends Component {
  componentDidMount() {
    this.props.getDecks();
  }

  openItem(itemId) {
    this.props.navigation.navigate({
      routeName: "DeckDetail",
      params: { ...itemId }
    });
  }

  render() {
    const { decks } = this.props;
    console.log("DeckList navigation", this.props.navigation);
    return (
      <Content>
        <Text>DeckList</Text>
        <Slider data={decks} openItem={this.openItem} />
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

export default withNavigation(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(DeckList)
);
