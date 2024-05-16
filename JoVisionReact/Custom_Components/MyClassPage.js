import React, { Component } from "react";
import { View, Text } from "react-native";

class MyclassPage extends Component {
  render() {
    const { name, grade, age } = this.props;
    return (
      <View>
        <Text>Name: {name}</Text>
        <Text>Grade: {grade}</Text>
        <Text>Age: {age}</Text>
      </View>
    );
  }
}

export default MyclassPage;
