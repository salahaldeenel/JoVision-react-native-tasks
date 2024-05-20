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
  //to refrence one class to another 
  // create a constructor and a super send props as its 
  //arguments in the constructor create a variable and
  // assign the createref() function to it
  //create a function that will call the other class refrence
  //function then in the tag add an attribute that will send the refrece u created
  //in the refrenced class create a constructor like the before without the refrence
  //create the funtion that will change what u need to change 
  