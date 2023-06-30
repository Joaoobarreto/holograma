import { StatusBar, Button, StyleSheet, TouchableOpacity, Text, View, SafeAreaView, Image } from 'react-native';
import * as React from 'react';

import logoImage from '../../../assets/Logo.png';


export default function ProfilePage({ navigation }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <View style={styles.background}>
        <Text style={styles.holoText}>HOLO</Text>
        <Text style={styles.sloganText}>Your vision, our holograms</Text>
        <View style={styles.logoContainer}>
          <Image source={logoImage} style={styles.logoImage} />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Conectar-se com o Google</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
  },
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  holoText: {
    fontSize: 80,
    color: 'white',
    fontWeight: 'bold',
    letterSpacing: 20,
    marginTop: -20,
    alignSelf: 'center'
  },
  sloganText: {
    fontSize: 18,
    color: 'white',
    marginTop: 10,
    fontStyle: 'italic',
  },
  logoContainer: {
    marginTop: 80,
    marginBottom: 80,

  },
  logoImage: {
    width: 200,
    height: 200,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    height: 60,
    width: 300,
    borderRadius: 8,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
    
  buttonText: {
    color: '#0001FC',
    fontSize: 18,
    fontStyle: 'italic',
  },
});