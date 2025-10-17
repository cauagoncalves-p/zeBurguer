import { Image, View, Text, StyleSheet } from 'react-native';

const Card = ({ imagem, title, preco }) => {
  return (
      <View style={styles.viewIMG}>
          <Image source={imagem} style={styles.img} />
          <Text>{title}</Text>
          <View style={styles.hr}/>
          <Text style={styles.preco}>{preco}</Text>
      </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewIMG: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius:10,
    padding:10,
    width:"33%",
    gap:10
  },
  img: {
    width: 100,
    height: 100,
  },
  hr:{
    borderBottomColor:"#ccc",
    borderWidth:0.3, 
    width:"100%"
  },
  preco:{
    color:"#542c22",
    fontWeight:800,
    fontSize:16
  }
});
