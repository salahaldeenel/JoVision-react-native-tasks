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
