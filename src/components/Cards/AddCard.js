import React, { Component } from "react";
import {
  Content,
  Form,
  Item,
  Label,
  Input,
  Card,
  Body,
  CardItem,
  Button,
  Text,
  Icon
} from "native-base";
class AddCard extends Component {
  state = {
    question: "",
    answer: "",
    canSubmit: false
  };

  disableButton = () => {
    this.setState({ canSubmit: false });
  };

  enableButton = () => {
    this.setState({ canSubmit: true });
  };

  handleSubmit = () => {
    console.log("Input submitted");
  };

  render() {
    return (
      <Content>
        <Card>
          <CardItem>
            <Body>
              <Form style={{ alignSelf: "stretch" }}>
                <Item floatingLabel>
                  <Label>Question</Label>
                  <Input />
                </Item>
                <Item floatingLabel last>
                  <Label>Answer</Label>
                  <Input />
                </Item>
                <Button success block onPress={() => this.handleSubmit}>
                  <Text>submit</Text>
                  <Icon
                    name="md-checkmark-circle-outline"
                    size={20}
                    color="#FFFFFF"
                  />
                </Button>
              </Form>
            </Body>
          </CardItem>
        </Card>
      </Content>
    );
  }
}

export default AddCard;
