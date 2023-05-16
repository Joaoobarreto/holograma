import { StyleSheet, View } from 'react-native';
import * as React from 'react';
import MenuHome from '../../components/MenuHome';
import PageTitle from '../../components/PageTitle';

export default function Home({navigation}) {
  React.useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <View>
      <PageTitle>Pagina Inicial</PageTitle>
      <MenuHome/>
    </View>
  );
}

const styles = StyleSheet.create({
  titulo: {

  },
  carrossel: {
    
  },
  submenu: {

  },
  lista: {

  }
})