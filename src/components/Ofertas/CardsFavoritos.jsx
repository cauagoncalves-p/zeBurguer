import {View, Text, StyleSheet} from "react-native";
import imagem1 from '../../assets/chicken.png';
import imagem2 from '../../assets/chicken.png';
import imagem3 from '../../assets/chicken.png';
import Card from "./Card";
 
const CardsFavoritos = () => {
  return (
    <View style={{ paddingHorizontal: 10, gap: 10 }}>
      <Text style={styles.txtFavoritos}>Favoritos</Text>
      <View style={styles.viewFavoritos}>
        <Card imagem={imagem1} title={'Chicken King’s 2.0'} preco={'R$ 30.98'} />
        <Card imagem={imagem2} title={'Chicken King’s 2.0'} preco={'R$ 40.98'} />
        <Card imagem={imagem3} title={'Chicken King’s 2.0'} preco={'R$ 50.98'} />
      </View>
    </View>
  );
};

export default CardsFavoritos;

const styles = StyleSheet.create({
  viewFavoritos: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 5,
  },
  txtFavoritos:{
    color:"#542c22",
    fontSize:20,
    fontWeight:"bold",
    marginTop:20
  }
});

