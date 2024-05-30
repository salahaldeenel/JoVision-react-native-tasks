import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MyFunctionPage from '../Custom_Components/MyFuctionPage2';
 
const Task22 = () => {
  const [name, setName] = useState("This will Change"); // this can be used for function components not classes 
  //it will save name as whatever the paramters is and setName as a fucniton which will update setName
  return (
    <View style={styles.container}>
      
      <MyFunctionPage setName={setName} />
      <Text style={styles.text}>{name}</Text> 
     
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 24,
    borderWidth: 1,
    borderColor: '#264653',
    padding: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  text:{
    fontSize: 18,
    marginTop: 40,
  },
});

export default Task22;
