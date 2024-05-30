import React, { Component } from "react";
import { View, StyleSheet, Image, Pressable } from "react-native";
import Video from "react-native-video";

// Replace these with your actual video and image resources
import Catvideo from "../Resource/Cat.mp4";
import posterImage from "../Resource/Sleepyjoe.jpg";

export default class Task32 extends Component {
constructor(){
super();
this.state={
    Stopped:false
}
}
    
togglePlayPause = () =>{
this.setState(previousState=>({Stopped:!previousState.Stopped}))
}

    render() {
        return (
            <View style={styles.container}>
                <Pressable style={styles.videoContainer} onPress={this.togglePlayPause}>
                    <Video
                        source={Catvideo}
                        style={styles.video}
                        paused={this.state.Stopped}
                        controls={false}
                       
                       
                    />
                </Pressable>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    videoContainer: {
        width: '100%',
        height: '100%',
        position: 'relative',
    },
    video: {
        width: '100%',
        height: '100%',
    },
    poster: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        resizeMode: 'contain',
    },
});
