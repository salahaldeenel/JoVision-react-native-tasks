import React, { Component } from "react";
import { View, Text } from "react-native";

class MyclassPage extends Component {
  componentDidMount(){
   
    console.log("MyClassPage loaded")
  }
  componentWillUnmount(){
    console.log("MyClassPage unloaded")
  }
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
