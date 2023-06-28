import React, {useEffect, useState} from "react";
import { ScrollView, View, Image, StyleSheet } from "react-native";
import Texto from "../Texto";
import HologramaService from "../../services/HologramaService.service";

export default function HoloList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const hologramasData = await HologramaService.listarHologramas();
        setItems(hologramasData);
      } catch (error) {
        console.error('Erro ao obter a lista de hologramas:', error);
      }
    };

    fetchData();
  }, []);

  const gerarImagemParaHolograma = (hologramas) => {
    return hologramas.map(holo => {
      if (holo.descricao?.includes('Bulbassauro')) {
        holo.arquivoId = require('../../../assets/BulbasaurWireframe.png');
      } else if (holo.descricao?.includes('Homem de Ferro')) {
        holo.arquivoId = require('../../../assets/IronMan_WireFrame.png');
      } else if (holo.descricao?.includes('Darth Vader')) {
        holo.arquivoId = require('../../../assets/Darth_Vader_Holo.png');
      } else if (holo.descricao?.includes('Escudo Capitão América')) {
        holo.arquivoId = require('../../../assets/Captain_America_Shield.png');
      } else if (holo.descricao?.includes('Suzanne')) {
        holo.arquivoId = require('../../../assets/Suzanne_1.png');
      } else if (holo.descricao?.includes('Pikachu')) {
        holo.arquivoId = require('../../../assets/pikachu_wireframe.png');
      }
      return holo;
    });
  };

  const renderItems = () => {
    var hologramas = gerarImagemParaHolograma(items)
    return hologramas?.map((holo) => (
      <View style={estilos.item} key={holo.id}>
        <View style={estilos.image}>
          <Image source={holo.arquivoId} style={estilos.image} />
        </View>
        <View style={estilos.itemInfo}>
          <Texto style={estilos.textBold}>{holo.descricao}</Texto>
          <Texto style={estilos.textBold}>{holo.valor}</Texto>
        </View>
      </View>
    ));
  };

  return (
    <ScrollView>
      <View style={estilos.container}>{renderItems()}</View>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 10,
  },
  item: {
    width: "40%",
    padding: 10,
    margin: "5%",
  },
  itemInfo: {
    marginTop: 5,
    padding: 5,
  },
  textBold: {
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
  },
});
