import React from "react";
import  Icon  from "react-native-vector-icons/FontAwesome"; 
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Login from "../Login/Login"
import MenuPrincipal from "../Main/MenuPrincipal"
import Ofertas from "../Ofertas/Ofertas";
const tab = createMaterialTopTabNavigator();
export default props=>{
    return(
        <tab.Navigator screenOptions={{
            tabBarLabelStyle:{fontSize: 15}
        }}>
            <tab.Screen name="Login" component={Login} options={{
                tabBarIcon: () => (
                    <Icon size={24} name="user" />
                )
            }}/>

            <tab.Screen name="MenuPrincipal" component={MenuPrincipal}  options={{
                title:"Home", tabBarIcon: () => (
                    <Icon size={24} name="home"/>
                )
            }}/>
            <tab.Screen name="Ofertas" component={Ofertas} options={{
                title:"Ofertas", tabBarIcon: () => (
                    <Icon size={24} name="tag"/>
                )
            }}/>
        </tab.Navigator>
    )
}