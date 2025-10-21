import { View, StyleSheet} from 'react-native';
import CardsFavoritos from './CardsFavoritos';
import CardsCombos from './CardsCombos';
import CardsMaisPedidos from './CardsMaisPedidos';
import IconeMenuInferior from "../Main/IconeMenuInferior";

export default () => {
  return (
    <View style={styles.container}>
      <View style={{gap:30}}>
        <CardsFavoritos/>
        <CardsCombos/>
        <CardsMaisPedidos/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f7f0',
  },

});
