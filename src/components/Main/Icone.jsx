import { View, Text, Image} from "react-native";
const Icone = ({imagem, texto}) => {
  return (
      <View style={{ alignItems: 'center', gap: 5 }}>
        <Image source={imagem} />
        <Text style={{ color: '#542c22', fontWeight: '600' }}>{texto}</Text>
      </View>
  );
};

export default Icone;
