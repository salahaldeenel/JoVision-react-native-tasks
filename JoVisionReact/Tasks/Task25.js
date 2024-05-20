import React, { useState,useRef, Component, createRef } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import MyClassPage3 from '../Custom_Components/MyClassPage3';
export default class Task25 extends Component{
constructor(props){
    super(props);
    
        this.ref=createRef();
    
}
Changetext=(text)=>{
    this.ref.current.changedtext(text);
}
render(){
    return(
        <View style={styles.container}>
            

            <TextInput style={styles.input} placeholder='PLease enter name' onChangeText={this.Changetext}/>
            <MyClassPage3 ref={this.ref}/>
        </View>
    )
}


}
const styles = StyleSheet.create({
    input: {
      fontSize: 24,
      borderWidth: 4,
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
  });