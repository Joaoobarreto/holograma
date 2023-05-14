import { Button, StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import Texto from '../../components/Texto';
import Login from '../Login';

export default function Home({navigation}) {
  React.useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <View>
      <Texto>Pagina Inicial</Texto>
      <Login></Login>
    </View>
  );
}