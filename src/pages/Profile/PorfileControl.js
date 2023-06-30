import { StatusBar, StyleSheet,TouchableOpacity, Text, View, SafeAreaView, Alert } from 'react-native';
import React, { useEffect, useContext } from "react";
import { StoreContext } from '../../routes/routes';

export default function ProfileControl({ navigation }) {
  const { store } = useContext(StoreContext);

  useEffect(() => {
    definirRota();
  }, []);

  const definirRota = () => {
    if (store.usuario?.email && (!store.usuario?.cpf || !store.usuario?.telefone)) {
      navigation.navigate('InformacoesConta')
    } else if (store.usuario?.email) {
      navigation.navigate('ProfilePage');
    }
    else {
      navigation.navigate('IniciarLogin');
    }
  }

  return <></>;
}