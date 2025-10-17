import { View } from 'react-native';
import Icone from './Icone';
import Home from "../../assets/home.png"
import Ofertas from "../../assets/ofertas.png"
import Menu from "../../assets/menu.png"
import Maps from "../../assets/maps.png"
import Pontos from "../../assets/pontos.png"
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
      <Icone imagem={Home} texto={"Home"} rota={'MenuPrincipal'}/>
      <Icone imagem={Ofertas} texto={"Ofertas"} rota={'Ofertas'}/>
      <Icone imagem={Menu} texto={"Menu"} rota={'MenuPrincipal'}/>
      <Icone imagem={Maps} texto={"BK Mapas"} rota={'MenuPrincipal'}/>
      <Icone imagem={Pontos} texto={"More"} rota={'MenuPrincipal'}/>
    </View>
  );
};

export default IconeMenuInferior;
