import { Component } from "react";
import Catvideo from "../Resource/Cat.mp4"
import sleepyjoe from  "../Resource/Sleepyjoe.jpg"
import { View,Text,StyleSheet, Image, ImageBackground, Pressable, Alert } from "react-native";
import Video from "react-native-video";
import Thumbnail from "../Custom_Components/Thumbnail";
export default class Task32 extends Component{
    constructor(){
        super()
        this.state=
        {   content:true,
            imagesrc: require('../Resource/Flower1.jpg'),
        }
    }
    HideAndShow=()=>{
        this.setState(previousState => ({ content: !previousState.content }));
    }
    render (){
        return(
            <View style={styles.container}>
           
                <Video controls={true} source={Catvideo} style={styles.video} paused={this.state.content ? true : false} poster="https://baconmockup.com/300/200/"/>
                <Pressable style={styles.image} onPress={this.HideAndShow} >
                {this.state.content ? <Image  source={this.state.imagesrc}/> : null}
                </Pressable>
            </View>
        )
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
        fontSize: 40,
        marginTop: 20,
        color:'red',
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'cover',
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
        width: 410,
    height: 225,

    bottom:250,
    position:"absolute",
    right:0,
    justifyContent: 'center',
    alignItems: 'center',
    },
    video:{
height:'100%',
width:'100%'
    },
    
});