import React from "react";
import { ScrollView, View, Image, StyleSheet } from "react-native";
import Texto from "../Texto";

export default function HoloList({ items }) {
  const renderItems = () => {
    return items?.map((item) => (
      <View style={estilos.item} key={item.id}>
        <View style={estilos.image}>
          <Image source={require('../../../assets/img/holo-teste.jpg')} />
        </View>
        <View style={estilos.itemInfo}>
          <Texto style={estilos.textBold}>{item.title}</Texto>
          <Texto style={estilos.textBold}>{item.price}</Texto>
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
    width: '40%',
    padding: 10,
    margin: '5%',
  },
  itemInfo: {
    marginTop: 5,
    padding: 5,
  },
  textBold: {
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
});
