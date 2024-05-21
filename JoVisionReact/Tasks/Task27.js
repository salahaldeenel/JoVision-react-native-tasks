import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, Alert, Image } from 'react-native';

export default class Task27 extends Component {
    constructor() {
        super();
        this.state = {
            imageId: 0,
            imageSource: require('../Resource/Flower1.jpg') // initial image
        };
    }
   
    AlertMessage = () => {
        Alert.alert("Hello", "You pressed the button", [
            {
                text: "1",
                onPress: () => {
                    console.log("pressed button 1");
                    this.setState({
                        imageId: 1,
                        imageSource: require('../Resource/Flower1.jpg')
                    });
                }
            },
            {
                text: "2",
                onPress: () => {
                    console.log("pressed button 2");
                    this.setState({
                        imageId: 2,
                        imageSource: require('../Resource/Flower2.jpg')
                    });
                }
            },
            {
                text: "3",
                onPress: () => {
                    console.log("pressed button 3");
                    this.setState({
                        imageId: 3,
                        imageSource: require('../Resource/Flower3.jpeg')
                    });
                }
            },
            {
                text: "Cancel",
                style: "cancel"
            }
        ]);
    }

    render() {
        return (
            <View style={styles.container}>
                <Button title='Press me' onPress={this.AlertMessage}></Button>
                <Text style={styles.text}>Selected Image ID: {this.state.imageId}</Text>
                <Image source={this.state.imageSource} style={styles.image}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
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
    image: {
        width: 300,
        height: 300,
        marginTop: 20,
    },
});
