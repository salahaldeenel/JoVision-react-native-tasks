// Task24.js
import React, { useState,useRef } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import MyFunctionPage from '../Custom_Components/MyFunctionPage3';


const Task24 = () => {
    const modalref = useRef();
    const handleopenref =(text)=>{
        if(modalref.current)
        modalref.current.openText(text);
    }
  return (
    <View style={styles.container}>
      
      <MyFunctionPage ref={modalref}></MyFunctionPage>
      <TextInput style={styles.input} onChangeText={handleopenref} 
       
       />
    </View>
  );
};

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

export default Task24;
// to create a refrence from on funciton to another 
// follow these steps 
// create a varable and use the UseRef function from react
// for it refrence outside functions
//send this refrence to the function you aim to refrence
// the function must have props and ref as its arguments
// in the function you aim to refrence create a varibale and
// its varibles function with the use state function from react
//use imperative handling function include inside of it the ref
// then use an arrow function and the use state variable function name
//or any function u created to refrence the function 