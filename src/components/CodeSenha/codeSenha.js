import React, { useState } from 'react';
import {Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View, 
} from 'react-native';
import { TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from "react-native";
export default props => {
  const navigation = useNavigation()
  const [Password, setPassword] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.viewMain}>
        <View style={styles.viewIMG}>
          <Image
            source={require('../../assets/logo_hamburguer.png')}
            style={{ width: 150, height: 150 }}
          />
        </View>

        <View>
          <Text style={{color:"#bdbab2"}}>Informe seu e-mail</Text>
          <TextInput style={{backgroundColor:"#f6f7f0"}} />
          <View
            style={{ borderBottomColor: '#ccc', borderWidth: 1, width: '100%' }}
          />
        </View>
        <View>
            <TouchableOpacity style={styles.buttonContinuar}>
                <Text style={{textAlign:"center", fontWeight:700, fontSize:18, color:"red"}} onPress={() => navigation.navigate('Login')}>Continuar</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f6f7f0',
    padding: 15,
  },
  viewMain: {
    width: '100%',
    gap:20
  },
  viewIMG: {
    alignItems: 'center',
  },
  buttonEntrarTxT:{
    color:"white", 
    textAlign:"center", 
    fontWeight:"500", 
    fontSize:18
  },
  viewButtonDiv:{
    width:"80%",
    flexDirection:"row", 
    justifyContent:"space-around",
    alignItems:"center"
  },
  buttonContinuar:{
    marginTop:30,
    borderColor:"red", 
    borderWidth:4,
    padding:10
  }  
});
