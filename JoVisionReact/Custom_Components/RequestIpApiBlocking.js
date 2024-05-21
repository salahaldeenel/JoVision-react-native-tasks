import React, { useState,useRef, Component, createRef } from 'react';
import { StyleSheet, View, Text, TextInput,ActivityIndicator } from 'react-native';
export default class RequestBlockingIpApi extends Component{
    constructor(props){
        super(props)
        this.state={
            Ip:'NULL',
            Isloading:false,
        };
    }
fetchapiBlocking =async()=>{

try{
    this.setState({Isloading:true})
    const respone = await fetch("https://api.ipify.org/");
    const ip=await respone.text();
    this.setState({Ip:ip});
}
catch (error) {
    console.error('Error:', error);
  } 
  finally{
    this.setState({Isloading:false})
  }
    
}
render(){
    return(
        <View style={styles.container}>
{ this.state.Isloading?(<ActivityIndicator size="large"/>):<Text style={styles.text}>{this.state.Ip}</Text>}

        </View>
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