import React, { Component } from "react";
import { Container, Text } from "native-base";

class DeckDetail extends Component {
  render() {
    console.log("DeckDetail props", this.props);
    return (
      <Container>
        <Text>Deck Detail</Text>
      </Container>
    );
  }
}

export default DeckDetail;
