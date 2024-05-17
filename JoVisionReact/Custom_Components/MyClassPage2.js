import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

class MyClassPage2 extends Component {
UpdateText = (text) =>{
this.props.UpdateName(text);
}
    render(){
        return(
            <View >
            <TextInput style={styles.input}placeholder='Input here' onChangeText={this.UpdateText}></TextInput>
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
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10,
    },
  });
export default MyClassPage2;
