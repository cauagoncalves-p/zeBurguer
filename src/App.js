import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text } from "react-native";
import Splash from "./components/Splash/Splash";
import Login from "./components/Login/Login";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Cadastrar from "./components/Cadastrar/Cadastrar";
import EsquecerSenha from "./components/esquecerSenha/EsquecerSenha";
import codeSenha from "./components/CodeSenha/codeSenha";
import MenuPrincipal from "./components/Main/MenuPrincipal";
import Ofertas from "./components/Ofertas/Ofertas";
import Index from "./components/BottomNave/Index";
import NavDrawer from "./components/DrawerNav/Index"
import CustomDrawer from "./components/CustomDrawer";
import AppDrawerNav from "./navegacao/AppDrawerNav";
const Stack = createNativeStackNavigator();
export default props => {
   return (
     <SafeAreaView style={styles.container}>
        <NavigationContainer>
            <AppDrawerNav/>
        </NavigationContainer>
    </SafeAreaView>
   )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})
    
