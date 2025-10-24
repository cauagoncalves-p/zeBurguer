import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { View } from "react-native/types_generated/index";
import CustomDrawer from "../components/CustomDrawer";
import Login from "../components/Login/Login";
import Cadastrar from "../components/Cadastrar/Cadastrar";
import MenuPrincipal from "../components/Main/MenuPrincipal";
import Ofertas from "../components/Ofertas/Ofertas";
import EsquecerSenha from "../components/esquecerSenha/EsquecerSenha";
import codeSenha from "../components/CodeSenha/codeSenha";

const Drawer = createDrawerNavigator();

export default props => {
    return(
        <Drawer.Navigator drawerContent={props => <CustomDrawer/>}>
            <Drawer.Screen name="Login" component={Login}/>
            <Drawer.Screen name="Cadastro" component={Cadastrar}/>
            <Drawer.Screen name="Esqueceu senha?" component={EsquecerSenha}/>
            <Drawer.Screen name="Envio de código para troca de senha?" component={codeSenha}/>
            <Drawer.Screen name="Home" component={MenuPrincipal}/>
            <Drawer.Screen name="Ofertas" component={Ofertas}/>
        </Drawer.Navigator>
    )
}