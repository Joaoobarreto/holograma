import React, { useEffect, useState } from "react";
import { ScrollView, Image, StyleSheet, View, Dimensions } from "react-native";
import MenuHome from "../../components/MenuHome";
import HoloList from "../../components/HoloList";
import HologramaService from "../../services/HologramaService.service";

const { width } = Dimensions.get("window");

export default function HomePage({ navigation }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const hologramasData = await HologramaService.listarHologramas();
        setItems(hologramasData);
      } catch (error) {
        console.error("Erro ao obter a lista de hologramas:", error);
      }
    };

    fetchData();
  }, []);

  const gerarImagemParaHolograma = (hologramas) => {
    return hologramas.map((holo) => {
      if (holo.descricao?.includes("Bulbassauro")) {
        holo.arquivoId = require("../../../assets/BulbasaurWireframe.png");
      } else if (holo.descricao?.includes("Homem de Ferro")) {
        holo.arquivoId = require("../../../assets/IronMan_WireFrame.png");
      } else if (holo.descricao?.includes("Darth Vader")) {
        holo.arquivoId = require("../../../assets/Darth_Vader_Holo.png");
      } else if (holo.descricao?.includes("Escudo Capitão América")) {
        holo.arquivoId = require("../../../assets/Captain_America_Shield.png");
      } else if (holo.descricao?.includes("Suzanne")) {
        holo.arquivoId = require("../../../assets/Suzanne_1.png");
      } else if (holo.descricao?.includes("Pikachu")) {
        holo.arquivoId = require("../../../assets/pikachu_wireframe.png");
      }
      return holo;
    });
  };
  hologramas = gerarImagemParaHolograma(items);

  return (
    <View style={estilos.page}>
      <View style={estilos.container}>
        <ScrollView
          horizontal
          contentContainerStyle={estilos.imageContainer}
        >
          <Image
            source={require("../../../assets/Monkey.png")}
            style={estilos.image}
          />
          <Image
            source={require("../../../assets/DarthVader.png")}
            style={estilos.image}
          />
          <Image
            source={require("../../../assets/IronMan.png")}
            style={estilos.image}
          />
        </ScrollView>
        <MenuHome navigation={navigation} />
        <HoloList items={hologramas} />
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#fff",
    fontWeight: "bold"
  },
  container: {
    flex: 1,
    width: width,
    alignItems: "center",
  },
  imageContainer: {
    alignItems: "center",
  },
  image: {
    width: width,
    height: 200,
    resizeMode: "contain",
  },
});