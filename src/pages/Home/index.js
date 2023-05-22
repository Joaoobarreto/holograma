import { StyleSheet, ScrollView, Image } from 'react-native';
import * as React from 'react';
import MenuHome from '../../components/MenuHome';
import PageTitle from '../../components/PageTitle';
import { hologramas } from '../../data/data';
import HoloList from '../../components/HoloList';

export default function Home({navigation}) {
  React.useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <ScrollView style={styles.container}>
      <PageTitle>Pagina Inicial</PageTitle>
      <Image source={require('../../../assets/img/IronMan.jpg')}></Image>
      <MenuHome/>
      <HoloList items={hologramas}></HoloList>
    </ScrollView>
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