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
import material from "config/native-base-theme/variables/material";
import * as Yup from "yup";
import { Formik } from "formik";
import { View } from "react-native";
import * as Actions from "components/Decks/store/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class AddCard extends Component {
  handleFormSubmit = (model, { resetForm }) => {
    this.props.storeCard({ card: model, deckId: this.props.deckId });
    console.log(model);
    resetForm();
  };

  renderForm = () => {
    return (
      <Formik
        initialValues={{
          question: "",
          answer: ""
        }}
        onSubmit={(values, actions) => this.handleFormSubmit(values, actions)}
        validationSchema={validationSchema}
        render={props => {
          return (
            <Form>
              <Item floatingLabel>
                <Label style={material.inputLabel}>Question</Label>
                <Input
                  name="question"
                  type="text"
                  onChangeText={props.handleChange("question")}
                  onBlur={props.handleBlur("question")}
                  value={props.values.question || ""}
                />
              </Item>
              <Item floatingLabel last>
                <Label style={material.inputLabel}>Answer</Label>
                <Input
                  name="answer"
                  type="text"
                  onChangeText={props.handleChange("answer")}
                  onBlur={props.handleBlur("answer")}
                  value={props.values.answer || ""}
                />
              </Item>
              <View style={[material.contentPaddingAll, { paddingTop: 20 }]}>
                <Button
                  block
                  success
                  disabled={!props.isValid}
                  onPress={props.handleSubmit}
                  title="SUBMIT"
                >
                  <Text>submit</Text>
                  <Icon
                    name="md-checkmark-circle-outline"
                    size={20}
                    color="#FFFFFF"
                  />
                </Button>
              </View>
            </Form>
          );
        }}
      />
    );
  };

  render() {
    return (
      <Content>
        <Card>
          <CardItem>
            <Body>
              <View style={{ alignSelf: "stretch" }}>{this.renderForm()}</View>
            </Body>
          </CardItem>
        </Card>
      </Content>
    );
  }
}

const validationSchema = Yup.object().shape({
  question: Yup.string()
    .min(2, "Minimum 2 characters required")
    .required("Field required"),
  answer: Yup.string()
    .min(2, "Minimum 2 characters required")
    .required("Field required")
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      storeCard: Actions.storeCard
    },
    dispatch
  );
}

export default connect(
  null,
  mapDispatchToProps
)(AddCard);
