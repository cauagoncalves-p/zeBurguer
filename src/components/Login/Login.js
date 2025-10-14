import React, { useState } from 'react';
import {Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View, 
} from 'react-native';
import { TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
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
          <Text style={{color:"#bdbab2"}}>E-mail ou CPF</Text>
          <TextInput style={{backgroundColor:"#f6f7f0"}} />
          <View
            style={{ borderBottomColor: '#ccc', borderWidth: 1, width: '100%' }}
          />
        </View>

        <View>
          <Text style={{color:"#bdbab2"}}>Digite sua senha</Text>
          <TextInput secureTextEntry={!Password} right={<TextInput.Icon icon={Password ? "eye" : "eye-off"} onPress={() => setPassword(!Password)}/> } style={{backgroundColor:"#f6f7f0"}}/>
          <View
            style={{ borderBottomColor: '#ccc', borderWidth: 1, width: '100%' }}
          />
        </View>

        <Text style={styles.txtEsqueciSenha}>ESQUECI A SENHA</Text>

        <View style={styles.viewButton}>
          <View>
            <TouchableOpacity style={styles.buttonEntrar}>
              <Text style={styles.buttonEntrarTxT}>Entrar</Text>
            </TouchableOpacity>
          </View>

          <View>
            <View>
              <TouchableOpacity style={styles.buttonOptionsLogin}>
                <View style={styles.viewButtonDiv}>
                  <Image source={require("../../assets/facebook.png")}/>
                  <Text>Continuar com Facebook</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity style={styles.buttonOptionsLogin}>
                <View style={styles.viewButtonDiv}>
                  <Image source={require("../../assets/google.png")}/>
                  <Text>Continuar com o Google</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity style={styles.buttonOptionsCadastrase} onPress={()=>navigation.navigate('Cadastrase')}>
                  <Text style={{textAlign:"center", fontWeight:700, fontSize:18, color:"red"}}>Cadastra-se</Text>
              </TouchableOpacity>
            </View>

            <Text style={{textAlign:"center", fontWeight:700, fontSize:18, color:"red",marginTop:30}}>Sair</Text>
          </View>
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
  txtEsqueciSenha:{
    color:"red",
    fontSize:15,
    fontWeight:500,
    textAlign:"right"
  },
  viewButton: {
    gap: 30,
  },
  buttonEntrar:{
    backgroundColor:"#eeac9e",
    borderRadius:5,
    padding:10
  },
  buttonEntrarTxT:{
    color:"white", 
    textAlign:"center", 
    fontWeight:"500", 
    fontSize:18
  },
  buttonOptionsLogin:{
    backgroundColor:"white", 
    padding:10, 
    marginTop:20,
    borderRadius:5,
  },
  viewButtonDiv:{
    width:"80%",
    flexDirection:"row", 
    justifyContent:"space-around",
    alignItems:"center"
  },
  buttonOptionsCadastrase:{
    marginTop:30,
    borderColor:"red", 
    borderWidth:4,
    padding:10
  }  
});
