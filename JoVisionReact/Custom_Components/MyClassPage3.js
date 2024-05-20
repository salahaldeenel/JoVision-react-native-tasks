import React, { useState,useRef, Component, createRef } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
export default class MyClassPage3 extends Component{
    constructor(props){
        super(props);
        this.state={
            name:'This Name will change'
        };
    }
changedtext=(text)=>{
this.setState({name:text})
};
render (){
return(
<View style={styles.container}>
  <Text style={styles.text}>{this.state.name}</Text>
</View>
)
};
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 20,
      marginBottom: 20,
    },
  });