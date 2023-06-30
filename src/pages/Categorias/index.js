import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import Texto from "../../components/Texto";
import CategoriaService from "../../services/CategoriaService.service";
import { useNavigation } from "@react-navigation/native";

export default function Categorias() {
  const navigation = useNavigation();
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    listarCategorias();
  }, []);

  const listarCategorias = async () => {
    try {
      const categorias = await CategoriaService.listarCategorias();
      setCategorias(categorias);
    } catch (error) {
      console.log(error);
    }
  };

  const listarHologramaPorCategoria = (id) => {
    navigation.navigate("HologramasPorCategoria", { id });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>
        <Texto style={styles.boldText}>Categorias</Texto>
      </Text>
      {categorias.map((categoria) => (
        <TouchableOpacity
          key={categoria.id}
          style={styles.button}
          onPress={() => listarHologramaPorCategoria(categoria.id)}
        >
          <Texto style={[styles.text, { color: "#0A1034" }]}>
            {categoria.descricao}
          </Texto>
        </TouchableOpacity>
      ))}
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