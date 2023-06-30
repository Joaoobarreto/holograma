import { StyleSheet,TouchableOpacity, Text, View, SafeAreaView } from 'react-native';
import React, { useContext } from "react";
import { StoreContext } from '../../routes/routes';


export default function InformacoesConta() {
    const { store } = useContext(StoreContext);
    return (
        <SafeAreaView>
            <View>
                <Text style={styles.subtitulo}>Nome de Usuário</Text>
                <Text style={styles.texto}>{store.usuario.nome}</Text>
            </View>
            <View>
                <Text style={styles.subtitulo}>CPF</Text>
                <Text style={styles.texto}>{store.usuario.cpf}</Text>
            </View>
            <View>
                <Text style={styles.subtitulo}>Email</Text>
                <Text style={styles.texto}>{store.usuario.email}</Text>
            </View>
            <View>
                <Text style={styles.subtitulo}>Telefone</Text>
                <Text style={styles.texto}>{store.usuario.telefone}</Text>
            </View>
            <View>
                <Text style={styles.subtitulo}>Endereço</Text>
                <Text style={styles.texto}>{store.usuario.endereco?.logradouro}</Text>
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