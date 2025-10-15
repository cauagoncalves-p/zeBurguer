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
const Stack = createNativeStackNavigator();
export default props => {
   return (
     <SafeAreaView style={styles.container}>
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="MenuPrincipal" component={MenuPrincipal} options={{title:"Main"}}></Stack.Screen>
                <Stack.Screen name="EsquecerSenha" component={EsquecerSenha} options={{title:"Forgot Password"}}></Stack.Screen>
                <Stack.Screen name="codeSenha" component={codeSenha} options={{title:"Code Password"}}></Stack.Screen>
                <Stack.Screen name="Cadastrase" component={Cadastrar} options={{title:"Register"}}></Stack.Screen>
                <Stack.Screen name="Splash" component={Splash}></Stack.Screen>
                <Stack.Screen name="Login" component={Login}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    </SafeAreaView>
   )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})
    
