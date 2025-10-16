import { Image, StyleSheet, Text, View } from "react-native";
import Card from "./Card";
import imgLanche from "../../assets/lanche.jpg"
import IconeMenuInferior from "./IconeMenuInferior";
import Cards from "./Cards";
export default props => {
   return (
     <View style={styles.container}>

        <View style={styles.viewIMG}>
            <View style={{flexDirection:"row", justifyContent:"space-between", width:"55%", alignItems:"center"}}>
                <Image source={require("../../assets/logo_hamburguer.png")} style={{height:50, width:50}}/>
                <Image source={require("../../assets/user.png")} style={{height:30, width:30}}/>
            </View>
        </View>
        <Cards/>
        <IconeMenuInferior/> 
    </View>
   )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#f6f7f0',
    },
    viewIMG:{
        alignItems:"flex-end", 
        padding:20
    },
    viewText:{
        width:"50%",
        gap:15
    },
    hr:{
        color:"#ccc", 
        borderBottomWidth:0.9
    }
})
    