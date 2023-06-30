import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import * as React from "react";
import { hologramas } from "../../data/data";
import HoloList from "../../components/HoloList";
import HologramaService from "../../services/HologramaService.service";

export default function Search({ navigation }) {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [filteredHologramas, setFilteredHologramas] =
    React.useState(hologramas);

  React.useLayoutEffect(() => {
    navigation.setOptions({ headerShown: true });
  }, [navigation]);

  const searchHologramas = async (query) => {
    if (query.length > 2) {      
      const obj = {
        Descricao: query,
      };
      try {
        const filtered = await HologramaService.consultarHologramasPorDescricao(obj);
        const hologramas = gerarImagemParaHolograma(filtered)
        setFilteredHologramas(hologramas)
      } catch (error) {
        console.log(error);
      }
    } else {
      setFilteredHologramas([])
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

  const handleSearch = (text) => {
    setSearchQuery(text);
    searchHologramas(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Pesquise por um holograma"
            value={searchQuery}
            onChangeText={handleSearch}
          />
        </View>
      </View>
      <HoloList items={filteredHologramas} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  searchContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  searchInputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  searchInput: {
    width: "90%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  searchIcon: {
    marginRight: 10,
    position: "absolute",
    right: 10,
  },
});


