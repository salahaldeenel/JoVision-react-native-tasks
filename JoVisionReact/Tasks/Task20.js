import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import MyClassPage from '../Custom_Components/MyClassPage'; // Correct the import path

export default class Task19 extends Component {
  constructor() {
    super();
    this.state = {
      content: false
    };
    
  }
  componentHideAndShow = () => {
    this.setState(previousState => ({ content: !previousState.content }));
  };
  
  
  
  render() {
    return (
      <View style={styles.container}>
        <Button title='Show'onPress={this.componentHideAndShow}/>
       {this.state.content ? <MyClassPage name='Salah Aldeen elananza' grade='100' age='18' />:null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10, // marginTop should be a number, not a string
  },
});
