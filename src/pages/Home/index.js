import { StyleSheet } from 'react-native';
import React, { useEffect, useState, useContext } from "react";
import { HomeStackRoutes } from '../../routes/homeStack.routes';
import { NavigationContainer } from '@react-navigation/native';
import { StoreContext } from '../../routes/routes';
import UsuarioService from '../../services/UsuarioService.service';


export default function Home({navigation}) {
  React.useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);
  const { store } = useContext(StoreContext);

  const [usuario, setUsuario] = useState([]);

  useEffect(() => {
    getUsuario();
  }, []);

  const getUsuario = async () => {
    try {
      const user = await UsuarioService.getUsuario(2);
      setUsuario(user);
      store.usuario = user;
      store.usuario.id = user.endereco.usuarioId
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <NavigationContainer independent={true}>
      <HomeStackRoutes/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({})