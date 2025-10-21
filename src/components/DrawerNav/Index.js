import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import  Icon  from "react-native-vector-icons/FontAwesome";
import Login from "../Login/Login";
import MenuPrincipal from "../Main/MenuPrincipal";

const Drawer = createDrawerNavigator();

export default props => { 
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Login" component={Login} options={{
                title:"Login",
                drawerLabel: "Login",
                drawerIcon: () => (
                    <Icon name={"user-circle"} size={24} color={"#000"}/>
                )
            }}/>
        
            <Drawer.Screen name="MenuPrincipal" component={MenuPrincipal}options={{
                title:"Menu Principal",
                drawerLabel: "Menu",
                drawerIcon: () => (
                    <Icon name={"house"} size={24} color={"#000"}/>
                )
            }}/>
        </Drawer.Navigator>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1, 
        justifyContent:"center", 
        alignItems:"center"
    },
    texto:{
        fontSize:24
    }
})