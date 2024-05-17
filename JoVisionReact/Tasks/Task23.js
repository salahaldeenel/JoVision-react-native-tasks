import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import MyClassPage2 from '../Custom_Components/MyClassPage2';
export default class Task16 extends Component {
  
constructor(){
    super();
    this.state={
       Name:'NAME HERE'
    };
}
UpdateName =(text)=>{
    this.setState({Name:text});
}
  render() {
    return (
      <View style={styles.container}>
       
       <MyClassPage2 UpdateName={this.UpdateName}></MyClassPage2>
       <Text >{this.state.Name}</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold"
  }
});
