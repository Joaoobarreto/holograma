import { StyleSheet } from 'react-native';
import React, { useContext } from "react";
import { HomeStackRoutes } from '../../routes/homeStack.routes';
import { NavigationContainer } from '@react-navigation/native';
import { StoreContext } from '../../routes/routes';


export default function Home({navigation}) {
  React.useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);
  const { store } = useContext(StoreContext);

  return (
    <NavigationContainer independent={true}>
      <HomeStackRoutes/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({})