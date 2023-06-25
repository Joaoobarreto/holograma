import { StyleSheet, View, StatusBar } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes/routes';

export default function App() {
  return (
    <>
      <StatusBar/>
      <NavigationContainer>
        <Routes/>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});