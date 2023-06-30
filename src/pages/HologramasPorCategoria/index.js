import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import HoloList from "../../components/HoloList";
import HologramaService from "../../services/HologramaService.service";

export default function HologramasPorCategoria() {
  const route = useRoute();
  const { id } = route.params;

  const [holo, setHologramas] = useState([]);

  useEffect(() => {
    listarHologramas();
  }, []);

  const listarHologramas = async () => {
    try {
      const holo = await HologramaService.listarHologramasPorCategoria(id);
      setHologramas(holo);
    } catch (error) {
      console.log(error);
    }
  };

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

  const hologramas = gerarImagemParaHolograma(holo);

  return <HoloList items={hologramas}></HoloList>;
}

const styles = StyleSheet.create({});