import React, { useEffect } from 'react';
import { View, Text,TextInput,StyleSheet } from 'react-native';

export default function MyFunctionPage({setName}) {
  useEffect(() => {
    console.log("MyFunctionPage2 loaded");
    return () => {
      console.log("MyFunctionPage2 unloaded");
    }
  }, []);

  return (
    <View>
      <TextInput style={styles.input} placeholder='Input Value' onChangeText={(text)=>(setName(text))}></TextInput>
    </View>
  );
}
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
  });
