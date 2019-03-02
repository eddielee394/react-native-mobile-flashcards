import React from "react";
import { Icon } from "native-base";
import material from "config/native-base-theme/variables/material";

export default class TabBarIcon extends React.Component {
  render() {
    return (
      <Icon
        name={this.props.name}
        size={26}
        style={{
          marginBottom: -3,
          color: this.props.focused
            ? material.tabBarActiveTextColor
            : material.tabBarTextColor
        }}
      />
    );
  }
}
