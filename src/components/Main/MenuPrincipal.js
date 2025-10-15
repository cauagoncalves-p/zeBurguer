import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default props => {
   return (
     <View style={styles.container}>
        <View>
            <Image source={require("../../assets/lanche.jpg")}/>
            <View>
                <Text>Lanche do Burguer King</Text>
                <Text>Pao Brioche com 2 hamburguer, alface, tomate e cheeder </Text>
            </View>
        </View>
        
    </View>
   )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#f6f7f0',
    }
})
    