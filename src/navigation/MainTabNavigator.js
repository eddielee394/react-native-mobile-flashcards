import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import TabBarIcon from "components/UI/TabBarIcon";
import HomeScreen from "screens/HomeScreen";
import AddDeckScreen from "screens/AddDeckScreen";
import SettingsScreen from "screens/SettingsScreen";
import material from "config/native-base-theme/variables/material";

const HomeStack = createStackNavigator({
  Home: HomeScreen
});

HomeStack.navigationOptions = {
  tabBarLabel: "Home",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-information-circle${focused ? "" : "-outline"}`
          : "md-information-circle"
      }
    />
  )
};

const NewDeckStack = createStackNavigator({
  NewDeck: AddDeckScreen
});

AddDeckScreen.navigationOptions = {
  tabBarLabel: "Add Deck",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-plus" : "md-plus"}
    />
  )
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen
});

SettingsStack.navigationOptions = {
  tabBarLabel: "Settings",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-options" : "md-options"}
    />
  )
};

const routeConfigs = {
  HomeStack,
  NewDeckStack,
  SettingsStack
};

export default createBottomTabNavigator(routeConfigs, {
  tabBarOptions: {
    activeTintColor: material.tabBarActiveTextColor,
    inactiveTintColor: material.tabBarTextColor,
    style: { backgroundColor: material.toolbarDefaultBg }
  }
});
