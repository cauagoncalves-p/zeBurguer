import { View } from 'react-native';
import Icone from './Icone';
import Home from "../../assets/home.png"
const IconeMenuInferior = () => {
  return (
    <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        zIndex: 1,
        position: 'absolute',
        bottom: 0,
        width: '100%',
      }}>
      <Icone imagem={Home} texto={"Home"}/>
      <Icone imagem={Home} texto={"Home"}/>
      <Icone imagem={Home} texto={"Home"}/>
      <Icone imagem={Home} texto={"Home"}/>
      <Icone imagem={Home} texto={"Home"}/>
    </View>
  );
};

export default IconeMenuInferior;
