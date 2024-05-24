import { Component } from "react";
import Catvideo from "../Resource/Cat.mp4"
import sleepyjoe from  "../Resource/Sleepyjoe.jpg"
import { View,Text,StyleSheet } from "react-native";
import Video from "react-native-video";
export default class Task32 extends Component{
    render (){
        return(
            <View style={styles.container}>
               
                <Video controls={true} source={Catvideo} style={styles.video} paused={true}></Video>
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
    video:{
height:'100%',
width:'100%'
    }
});