import React, { useState,useRef, Component,createRef } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import RequestIpApi from '../Custom_Components/RequestIpApiNonBlocking';
import RequestBlockingIpApi from '../Custom_Components/RequestIpApiBlocking';

export default class Task26 extends Component
{constructor(props){
    super(props);
    
        this.Nonref=createRef();
        this.Blockref=createRef();

    
}
RequestNonBlockingApi=()=>{
    this.Nonref.current.fetchapi();
}
RequestBlockingApi=()=>{
    this.Blockref.current.fetchapiBlocking();
}
render(){
    return(
        <View style={styles.container}>
            <Button title='Non-Blocking API' onPress={this.RequestNonBlockingApi}></Button>
            
            <Button title='Blocking API' onPress={this.RequestBlockingApi}></Button>
            <RequestIpApi ref={this.Nonref}></RequestIpApi>
            <RequestBlockingIpApi ref={this.Blockref}></RequestBlockingIpApi>
             
        </View>
    )
}
}






const styles = StyleSheet.create({
    input: {
      fontSize: 24,
      borderWidth: 1,
      borderColor: '#264653',
      padding: 10,
      width: '80%',
      marginVertical: 20,
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10,
    },
    text: {
      fontSize: 18,
      marginTop: 20,
    },
  });