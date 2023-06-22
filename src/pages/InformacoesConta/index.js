import { StatusBar, Button, StyleSheet,TouchableOpacity, Text, View, SafeAreaView, Alert } from 'react-native';
import * as React from 'react';
import {Ionicons} from '@expo/vector-icons';


export default function InformacoesConta() {
    return (
        <SafeAreaView>
            <Ionicons style={styles.seta} name="arrow-back" size={50} color="black" />
            <View>
                <Text style={styles.titulo}>Informações da Conta</Text>
            </View>
            <View>
                <Text style={styles.subtitulo}>Nome de Usuário</Text>
                <Text style={styles.texto}>Rafael Pereira</Text>
            </View>
            <View>
                <Text style={styles.subtitulo}>CPF</Text>
                <Text style={styles.texto}>***.***.***-**</Text>
            </View>
            <View>
                <Text style={styles.subtitulo}>Email</Text>
                <Text style={styles.texto}>rafa_pereira@gmail.com</Text>
            </View>
            <View>
                <Text style={styles.subtitulo}>Telefone</Text>
                <Text style={styles.texto}>(99)99999-9999</Text>
            </View>
            <View>
                <Text style={styles.subtitulo}>Endereço</Text>
                <Text style={styles.texto}>SQN 308 Bloco D, 402</Text>
            </View>
            <TouchableOpacity>
            <Text style={styles.alterar}>Alterar</Text>
            </TouchableOpacity>
           
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      fontSize: 24,
      fontStyle: 'normal'
    },
    seta: {
        marginTop: 15
    },
    titulo:{
        margin: 10,
        fontWeight: 'bold',
        fontSize: 28
    },
    subtitulo:{
        fontStyle: 'italic',
        fontWeight: '100',
        fontSize: 22,
        marginTop: 30,
        marginLeft: 20
    },
    texto:{
        color: '#0001FC',
        marginLeft: 20,
        fontSize: 16
    },
    alterar: {
        fontSize: 20,
        color: 'black',
        marginTop: 40,
        textAlign: 'center',
        fontWeight: 'bold'
    },
  });