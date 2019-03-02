import React, { Component } from "react";
import { Container, Text } from "native-base";
import {TextInput, Button, Alert} from "react-native";
import * as Actions from "components/Decks/store/actions";
import {bindActionCreators} from "redux";
//import connect from "react-redux/es/connect/connect";
import { connect } from "react-redux";
import Helper from "utils/Helpers"
const faker = require("faker");
import { Actions as RouteActions } from "react-native-router-flux";


class AddDeck extends Component {

  constructor(props){
    super(props)
      this.state = {deckTitle:''}
  }

  submitDeck(name){
      let deck = Helper.formatDeck({title:name,imgUrl:faker.image.technics(720, 1440, true)})
      this.props.doAddDeck(deck).then(function (response) {
          console.log(response)
          if(response.value)
          RouteActions.deckDetail({ itemId: response.value.id });
      })


  }



  render() {
    return (
      <Container>
        <Text style={{fontWeight: 'bold',fontSize:20}}>Add A New Deck</Text>
        <TextInput style={{fontSize:14}} placeholder={'Deck Title'} onChangeText={(deckTitle)=>this.setState({deckTitle})}/>
        <Button title={'Add Deck'} onPress={()=>{this.submitDeck(this.state.deckTitle)}}/>
      </Container>
    );
  }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            doAddDeck: Actions.storeDeck
        },
        dispatch
    );
}

export default connect(
    null,
    mapDispatchToProps
)( AddDeck);
