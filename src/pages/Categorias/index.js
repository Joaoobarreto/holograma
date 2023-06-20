import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import Texto from "../../components/Texto";

export default function Categorias() {
  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>
        <Texto style={styles.boldText}>Categorias</Texto>
      </Text>
      <TouchableOpacity style={styles.button}>
        <Texto style={[styles.text, { color: "#0A1034" }]}>Todos</Texto>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Texto style={[styles.text, { color: "#0A1034" }]}>Filmes</Texto>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Texto style={[styles.text, { color: "#0A1034" }]}>Séries</Texto>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Texto style={[styles.text, { color: "#0A1034" }]}>Games</Texto>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Texto style={[styles.text, { color: "#0A1034" }]}>Celebridades</Texto>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Texto style={[styles.text, { color: "#0A1034" }]}>Esportes</Texto>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  pageTitle: {
    fontSize: 24,
    width: "100%",
    textAlign: "left",
    paddingLeft: 15,
    marginTop: 10,
    marginBottom: 10,
  },
  button: {
    height: 60,
    margin: 10,
    marginLeft: 15,
    marginRight: 15,
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  text: {
    paddingLeft: 15,
    fontSize: 18,
    fontStyle: "italic",
  },
  boldText: {
    fontWeight: "bold",
    color: "#0A1034",
  },
});
