import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { ProgressBar} from "react-native-paper";

export default () =>{
    return(
        <View style={styles.container}>
            <Image source={require("../../assets/logo_hamburguer.png")} style={styles.img}/>
            <ProgressBar progress={0.5} color={"#cfa23fff"} indeterminate style={styles.ProgressBar}/>
            <Text style={styles.txtxLoading}>Loading...</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1, 
        alignItems:"center", 
        justifyContent:"center"
    },
    img:{
        width:300,
        height:300
    }, 
    ProgressBar:{
        width:250,
        height:15
    },
    txtxLoading:{
        fontSize:30,
        marginTop:20, 
        fontFamily: "AlanSans-Light"
    }
})