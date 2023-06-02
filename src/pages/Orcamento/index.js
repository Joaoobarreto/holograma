import React from "react";
import { View, StyleSheet } from "react-native";
import Texto from "../../components/Texto";

export default function Categorias() {
  return (
    <View style={styles.container}>
      <Texto style={styles.text}>Teste</Texto>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0A1034",
  },
});
