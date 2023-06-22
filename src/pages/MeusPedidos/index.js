import { StatusBar, Button, Image, StyleSheet,TouchableOpacity, Text, View, SafeAreaView, Alert } from 'react-native';
import * as React from 'react';
import Texto from '../../components/Texto';
import {Ionicons} from '@expo/vector-icons';
import { hologramas } from '../../data/data';

export default function MeusPedidos() {
    const Holo=hologramas.slice(0,17)
    const renderItems = () => {
        return Holo?.map((item) => (
          <TouchableOpacity style={styles.borda} key={item.id}>
            <View>
              <Image source={require('../../../assets/img/holo-teste.jpg')}/>
            </View>
            <View>
              <Texto style={styles.itemNome}>{item.title}</Texto>
              <Texto style={styles.price}>Preço: R${item.price}</Texto>
              <Texto style={styles.price}>Quantidade: </Texto>
            </View>
          </TouchableOpacity>
        ));
    }
    return (
        <SafeAreaView>
            <View>
                <Text style={styles.titulo}>Meus Pedidos</Text>
            </View>
            <View>
                <View>{renderItems()}</View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      fontSize: 24,
      fontStyle: 'normal'
    },
    titulo:{
        margin: 20,
        fontWeight: 'bold',
        fontSize: 28
    },
    borda:{
        borderWidth: 2,
        borderRadius: 10,
        marginRight: 20,
        marginLeft: 20,
        marginTop: 20,
        display: 'flex',
        flexDirection: 'row'
    },
    itemNome:{
        paddingLeft: 80,
        fontSize: 18,
        fontWeight: 'bold'
    },
    price:{
      marginTop: 5,
      paddingLeft: 5
    }
  });