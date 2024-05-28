import { Component } from "react";
import { View,Text,StyleSheet, Button, Alert } from "react-native";
import UseTime from "../Custom_Components/Datetime";

export default function Task34 () {
    const DisplayTime=UseTime();
return(
   
<View style={styles.container}>
    
    <Text style={styles.text}>{DisplayTime.toLocaleTimeString()}</Text>
    <Text style={styles.text}> {DisplayTime.toLocaleDateString()}</Text>
      
   
</View>

)

}alert=()=>{
Alert.alert("Hi","Hi")
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

})