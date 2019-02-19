import React, { Component } from "react";
import * as Actions from "components/Decks/store/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Slider } from "components/UI";
import { Content, Tabs, ScrollableTab, Header, Tab, Text } from "native-base";
import { Actions as RouteActions } from "react-native-router-flux";

class DeckList extends Component {
  componentDidMount() {
    this.props.getDecks();
  }

  openItem(itemId) {
    console.log("Decklist RouteActions: ", RouteActions);
    RouteActions.deckDetail({ itemId: itemId });
  }

  render() {
    const { decks } = this.props;

    return (
      <Content>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckList);
