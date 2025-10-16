import { View, Image, Text, StyleSheet} from 'react-native';

const Card = ({titulo,descricao, imagem}) => {
  return (
    <View style={{paddingHorizontal:15}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Image
          source={imagem}
          style={{ width: 180, height: 130 }}
        />
        <View style={styles.viewText}>
          <Text style={{ fontWeight: '900', color: '#4e2718' }}>
            {titulo}
          </Text>
          <Text>{descricao}</Text>
        </View>
      </View>
      <View style={styles.hr} />
    </View>
  );
};

export default Card;
const styles = StyleSheet.create({
    viewText:{
        width:"50%",
        gap:15 
    },
    hr:{
        color:"#ccc", 
        borderBottomWidth:0.9
    }
})
    