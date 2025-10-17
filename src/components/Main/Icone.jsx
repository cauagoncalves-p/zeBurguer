import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, TouchableOpacity} from "react-native";
const Icone = ({imagem, texto,rota}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate(rota)}>
      <View style={{ alignItems: 'center', gap: 5 }}>
        <Image source={imagem} />
        <Text style={{ color: '#542c22', fontWeight: '600' }}>{texto}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Icone;
