import { Button, StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import Texto from '../../components/Texto';

export default function Profile({navigation}) {
  React.useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);
  
  return (
    <View style={styles.container}>
      <Texto>Teste</Texto>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
