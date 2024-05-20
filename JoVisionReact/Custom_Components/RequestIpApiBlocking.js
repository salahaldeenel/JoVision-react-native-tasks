import React, { useState,useRef, Component, createRef } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
export default class RequestBlockingIpApi extends Component{
    constructor(props){
        super(props)
        this.state={
            Ip:'NULL',
        };
    }
fetchapiBlocking =async()=>{

try{
    const respone = await fetch("https://api.ipify.org/");
    const ip=await respone.text();
    this.setState({Ip:ip});
}
catch (error) {
    console.error('Error:', error);
  } 
  
    
}
render(){
    return(
        <Text style={styles.text}>{this.state.Ip}</Text>
    )
}
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