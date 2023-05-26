import { StyleSheet } from 'react-native';
import * as React from 'react';
import { HomeStackRoutes } from '../../routes/homeStack.routes';
import { NavigationContainer } from '@react-navigation/native';

export default function Home({navigation}) {
  React.useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <NavigationContainer independent={true}>
      <HomeStackRoutes/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({})