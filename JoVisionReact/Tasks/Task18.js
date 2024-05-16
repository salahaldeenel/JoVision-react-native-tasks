import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, View, Text } from 'react-native';

export default class Task16 extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 5000);
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.isLoading ? (
          <>
            <ActivityIndicator size='large' id='AI1' />
            <Text id='Txt1'>Loading</Text>
          </>
        ) : (<><Text>Salah Aldeen Elananza</Text></>)}
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
  headerText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
  },
});
