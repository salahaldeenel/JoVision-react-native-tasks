import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList, Image, Pressable, Alert, Button, TextInput, ImageBackground } from 'react-native';
import MyButton from '../Custom_Components/MyButton';

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
    input: {
        fontSize: 24,
        borderWidth: 1,
        borderColor: '#264653',
        padding: 10,
        width: '80%',
        marginVertical: 20,
    },
    redButton: {
        width: "10%", 
        margin: 10, 
        backgroundColor: "red"
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'cover',
        marginTop: 20,
    },
});

export default class Task28 extends Component {
    constructor() {
        super();
        this.state = {
            index: '1',
            Flowers: [
                { imagesrc: require('../Resource/Flower1.jpg'), id: 1 },
                { imagesrc: require('../Resource/Flower2.jpg'), id: 2 },
                { imagesrc: require('../Resource/Flower3.jpeg'), id: 3 },
                { imagesrc: require('../Resource/Flower4.jpg'), id: 4 },
                { imagesrc: require('../Resource/Flower5.jpeg'), id: 5 },
                { imagesrc: require('../Resource/Flower6.jpeg'), id: 6 },
                { imagesrc: require('../Resource/Flower7.jpeg'), id: 7 },
                { imagesrc: require('../Resource/Flower8.jpeg'), id: 8 },
                { imagesrc: require('../Resource/Flower9.jpeg'), id: 9 },
                { imagesrc: require('../Resource/Flower10.jpg'), id: 10 }
            ]
        };
    }

    NoOfIndex = (ind) => {
        Alert.alert("NoOfIndex", "The picture you pressed was number " + ind, [
            {
                text: "Continue"
            }
        ]);
    }

    InputPicIndex = (index) => {
        const newIndex = parseInt(index);
        if (newIndex >= 1 && newIndex <= this.state.Flowers.length) {
            this.flatListRef.scrollToIndex({ animated: false, index: newIndex - 1 });
        } else {
            Alert.alert("Error", `Input a number between 1 and ${this.state.Flowers.length}`);
        }
    }

    Deletepicture = (index) => {
        let updatedFlowers = [...this.state.Flowers];
        updatedFlowers.splice(index, 1);
        this.setState({ Flowers: updatedFlowers });
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    ref={(ref) => { this.flatListRef = ref; }}
                    style={styles.image}
                    data={this.state.Flowers}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => (
                        <Pressable onPress={() => this.NoOfIndex(item.id)}>
                            <ImageBackground source={item.imagesrc} style={styles.image}>
                                <MyButton title='Delete' onPress={()=> {this.Deletepicture(index)}} />
                            </ImageBackground>
                        </Pressable>
                    )}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => this.setState({ index: text })}
                    value={this.state.index}
                    keyboardType="numeric"
                />
                <Button title='Scroll to Index' onPress={() => this.InputPicIndex(this.state.index)} />
                <Text>{this.state.index}</Text>
            </View>
        );
    }
}
