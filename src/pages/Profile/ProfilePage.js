import { StatusBar, Button, StyleSheet,TouchableOpacity, Text, View, SafeAreaView, Alert } from 'react-native';
import * as React from 'react';
import Texto from '../../components/Texto';
import PageTitle from '../../components/PageTitle';
import {Entypo, AntDesign, EvilIcons, FontAwesome, FontAwesome5} from '@expo/vector-icons';


export default function ProfilePage({navigation}) {
  function InformacoesContaNavigate(){
    navigation.navigate('InformacoesConta')
  }
  function MeusPedidosNavigate(){
    navigation.navigate('MeusPedidos')
  }
    return (
    <SafeAreaView>
      <StatusBar/>
      <View>
      <PageTitle>Conta</PageTitle>
      <View style={styles.dadosUsuario}>
        <EvilIcons name="user" size={100} color="#0001FC" />
        <Texto style={styles.container}>Rafael Pereira</Texto>
      </View>
      <TouchableOpacity style={styles.button} onPress={MeusPedidosNavigate}>
        <Text style={styles.texto}>Meus Pedidos</Text>
      </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
        <Text style={styles.texto}>Retorno e Reembolso</Text>
      </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={InformacoesContaNavigate}>
        <Text style={styles.texto}>Informações da Conta</Text>
      </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
        <Text style={styles.texto}>Configurações</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.texto}>Ajuda</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.sair}>Sair</Text>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
      fontSize: 24,
      fontStyle: 'normal'
    },
    background:{
      backgroundColor: 'white'
    },
    button: {
      height: 60,
      margin: 10,
      marginLeft: 15,
      marginRight: 15,
      justifyContent: 'center',
      backgroundColor: 'white',
      borderRadius: 8,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 4,
    },
    texto: {
      color:"#0001FC",
      paddingLeft: 15,
      fontSize: 18,
      fontStyle: 'italic'
    },
    dadosUsuario: {
      margin: 10,
      marginLeft: 15,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    },
    sair: 
    {
      textAlign: 'center',
      color: 'red',
      fontSize: 24,
      marginTop: 20
    }
  });