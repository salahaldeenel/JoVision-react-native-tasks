import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { Component } from "react";
import { View, Text, TextInput, StyleSheet, Button, Alert } from 'react-native';

export default class Task35 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      TimeStamp: "",
      Tname: "",
      Tage: "",
      TCountry: "",
    };
    this.getData();
  }
  getData = async () => {
    try {
      const name = await AsyncStorage.getItem('Name');
      const age = await AsyncStorage.getItem('Age');
      const country = await AsyncStorage.getItem('Country');
      const timestamp = await AsyncStorage.getItem('TimeStamp')
      if (name !== null &&age !== null&&country !== null) {
        this.setState({Tname:name})
        this.setState({Tage:age})
        this.setState({TCountry:country})
        this.setState({TimeStamp:timestamp})
      }
    } catch (e) {
      // error reading value
    }
  };
 changeValue = async () => {
  const { Tname, Tage, TCountry } = this.state;
  let Parsed = parseInt(Tage);
  if (Tname !== "" && !isNaN(Parsed) && TCountry !== "") {
 
    const TimeStamp = new Date().toLocaleTimeString();
    this.setState({
      Name: Tname,
      Age: Tage,
      Country: TCountry,
      TimeStamp: TimeStamp,
      Tname: "",
      Tage: "",
      TCountry: "",
    });
    await AsyncStorage.setItem("Name", Tname);
    await AsyncStorage.setItem("Age", Tage);
    await AsyncStorage.setItem("Country", TCountry);
    await AsyncStorage.setItem("Timestamp", TimeStamp);
  } else {
    Alert.alert("Invalid", "Invalid Inputs");
  }
};

 
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Name:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({ Tname: text })}
          value={this.state.Tname}
        />
        <Text style={styles.text}>Age:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({ Tage: text })}
          value={this.state.Tage}
        />
        <Text style={styles.text}>Country:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({ TCountry: text })}
          value={this.state.TCountry}
        />
        <Button title="Submit" onPress={this.changeValue} />
        <Text>{this.state.TimeStamp}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'left',
    fontSize: 20
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  input: {
    fontSize: 24,
    borderWidth: 1,
    borderColor: '#264653',
    padding: 10,
    width: '80%',
    marginVertical: 20,
  },
});
