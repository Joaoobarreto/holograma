import React from "react";
import { ScrollView, Image, StyleSheet, View, Dimensions } from "react-native";
import PageTitle from "../../components/PageTitle";
import MenuHome from "../../components/MenuHome";
import HoloList from "../../components/HoloList";
import { hologramas } from "../../data/data.js";

const { width } = Dimensions.get("window");

export default function HomePage({ navigation }) {
  return (
    <View style={estilos.page}>
      <View style={estilos.container}>
        <PageTitle>Pagina Inicial</PageTitle>
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
