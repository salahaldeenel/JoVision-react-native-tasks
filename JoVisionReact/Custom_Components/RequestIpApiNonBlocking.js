import React, { useState,useRef, Component, createRef } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
export default class RequestIpApi extends Component{
    constructor(props){
        super(props)
        this.state={
            Ip:'NULL',
        };
    }
fetchapi =()=>{
    fetch("https://api.ipify.org/").then((res)=>res.text()).then((ip)=>this.setState({Ip:ip}));
    
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