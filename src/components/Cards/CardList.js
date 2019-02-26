import React, { Component } from "react";

import { StyleSheet, View,Alert } from "react-native";
import {
  Tabs,
  Tab,
  ScrollableTab,
  Grid,
  Col,
  Row,
  Button,
  Icon,
  Text
} from "native-base";
import { CardDetail } from "components/Cards";
import material from "config/native-base-theme/variables/material";
import {bindActionCreators} from "redux";
import { connect } from "react-redux";

import * as Actions from "components/Cards/store/actions";

import PushNotification from 'react-native-push-notification';
import PuchController from 'components/PushController.js'




class CardList extends Component {

    constructor(props) {
        super(props)
        this.state = { activeTab: 0 ,score:0}
    }


  correctButton(){
      console.log("correct button pressed")
      this.setState({score:this.state.score+1})
      this.nextTab()
  }

  wrongButton(){
      console.log("incorrect button pressed")
      this.nextTab()
  }


  nextTab(){
        if(this.state.activeTab<this.props.cards.length-1){
            this.setState({activeTab:this.state.activeTab+1})
        }else {
            this.setState({quizComplete:true, scorePercentage:Math.round((this.state.score/this.props.cards.length)*100)})
            this.sendNotification()
            console.log(this.state)
        }

  }

    sendNotification() {
        PushNotification.cancelAllLocalNotifications()
        PushNotification.localNotificationSchedule({
            id:"12345",
            message: 'You have not answered any quiz today', // (required)
            date: new Date(Date.now() + (60000*60*24)), //same time tomorroww
            repeatType: 'day'
        });
    };

  restartQuiz(){
        this.setState({score:0,activeTab:0,quizComplete:false})
      console.log('restart')
      console.log(this.state)
  }

  render() {
    const { cards } = this.props;

    if(!this.state.quizComplete)
    return (
      <View>
        <Tabs
          renderTabBar={() => <ScrollableTab />}
          style={[material.contentPaddingTop, material.androidShadow3]}
          page={this.state.activeTab}
        >
          {cards.map((card, index) => (
            <Tab key={index} heading={card.question}>
              <CardDetail key={index} card={card} />
              <View style={styles.container}>
                <Button
                  success
                  onPress={() => this.correctButton()}
                >
                  <Icon name="md-checkmark-circle-outline" />
                  <Text>Correct</Text>
                </Button>
                <Button
                  danger
                  onPress={() => this.wrongButton() }
                >
                  <Icon name="md-close" />
                  <Text>Incorrect</Text>
                </Button>
              </View>
            </Tab>
          ))}
        </Tabs>

          <Text style={{fontWeight: 'bold',fontSize:20}}>Question {this.state.activeTab+1} of {cards.length}</Text>
      </View>



    );
    else
        return (
            <View>
                <Text style={{textAlign: 'center',fontWeight:'bold',color:'green',fontSize:25}}>Quiz Completed!</Text>
                <Text style={{textAlign:'center',fontSize:20}}>You scored {this.state.scorePercentage}%</Text>

                <View style={styles.container}>
                    <Button success onPress={()=>this.restartQuiz()}>
                        <Text>Restart Quiz</Text>
                    </Button>

                    <Button primary>
                        <Text>Back to Deck</Text>
                    </Button>
                </View>

            </View>



        );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    padding: 10
  }
});


function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            alterScore: Actions.alterScore,

        },
        dispatch
    );
}

function mapStateToProps({ quizState }) {
    //do logic

    //pass from store to component
    return {

    };
}

export default connect(
    null,//mapStateToProps,
    mapDispatchToProps
)(CardList);
