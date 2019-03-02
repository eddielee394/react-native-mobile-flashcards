import React, { Component } from "react";
import * as Actions from "components/Decks/store/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Slider } from "components/UI";
import { Content, Tabs, ScrollableTab, Header, Tab, Text } from "native-base";
import { Actions as RouteActions } from "react-native-router-flux";
import PushController from 'components/PushController.js'
import PushNotification from "react-native-push-notification";

class DeckList extends Component {
  componentDidMount() {
    this.props.getDecks();

      PushNotification.localNotificationSchedule({
          id:"12345",
          message: 'You have not answered any quiz today', // (required)
          date: new Date(Date.now() + (60000*3)), //
          repeatType: 'day'
      });

  }

  openItem(itemId) {
    console.log("Decklist RouteActions: ", RouteActions);
    RouteActions.deckDetail({ itemId: itemId });
  }

  render() {
    const { decks } = this.props;

    return (
      <Content padder>
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
