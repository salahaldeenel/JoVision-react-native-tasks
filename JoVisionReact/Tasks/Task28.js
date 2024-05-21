import React, { Component } from 'react';
import { StyleSheet, View, Text ,FlatList, Image,press,Pressable,Alert} from 'react-native';

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
        width: 200,
        height: 200,
        resizeMode: 'cover', // You can also use 'contain', 'stretch', etc.
        marginTop: 20,
    },
  
});

export default class Task28 extends Component {
    constructor(){
        super();
        this.state={
          Flowers:[
{ imagesrc:require('../Resource/Flower1.jpg'),id:1},
{  imagesrc:require('../Resource/Flower2.jpg'),id:2},
{  imagesrc:require('../Resource/Flower3.jpeg'),id:3},
{ imagesrc:require('../Resource/Flower4.jpg'),id:4},
{  imagesrc:require('../Resource/Flower5.jpeg'),id:5},
{  imagesrc:require('../Resource/Flower6.jpeg'),id:6},
{  imagesrc:require('../Resource/Flower7.jpeg'),id:7},
{  imagesrc:require('../Resource/Flower8.jpeg'),id:8},
{  imagesrc:require('../Resource/Flower9.jpeg'),id:9},
{  imagesrc:require('../Resource/Flower10.jpg'),id:10}


           ]
        }
    }
    NoOfIndex = (ind) =>{
  Alert.alert("NoOfIndex","The picture you pressed was number "+ind,[
    {
        text:"Continue"
    }
  ])
    }
    render() {
        return (
            <View style={styles.container}>
                <FlatList style={styles.image} data={this.state.Flowers} renderItem={({item}) =>(<Pressable onPress={()=>this.NoOfIndex(item.id)}><Image source={item.imagesrc}></Image></Pressable>)}/>
                
            </View>
        );
    }
}
