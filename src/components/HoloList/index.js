import React, { useState } from "react";
import {ScrollView, View, Image, StyleSheet, Modal, TouchableOpacity,} from "react-native";
import Texto from "../Texto";



export default function HoloList({ items }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [cartMessage, setCartMessage] = useState("");

  const renderItems = () => {
    return items?.map((item) => (
      <TouchableOpacity
        style={estilos.item}
        key={item.id}
        onPress={() => setSelectedItem(item)}
      >
        <View style={estilos.imageContainer}>
          <Image source={item.img} style={estilos.image} />
        </View>
        <View style={estilos.itemInfo}>
          <Texto style={estilos.textBold}>{item.title}</Texto>
          <Texto>{item.price}</Texto>
        </View>
      </TouchableOpacity>
    ));
  };



  const closeModal = () => {
    setSelectedItem(null);
    setCartMessage("");
  };

  const addToCart = () => {
    setCartMessage("Produto adicionado ao carrinho!");
  };

  return (
    <ScrollView>
      <View style={estilos.container}>{renderItems()}</View>

      <Modal visible={selectedItem !== null} animationType="slide" transparent>
        <View style={estilos.modalContainer}>
          {selectedItem && (
            <View style={estilos.modalContent}>
              <TouchableOpacity style={estilos.closeButton} onPress={closeModal}>
                <Texto style={estilos.closeButtonText}>X</Texto>
              </TouchableOpacity>
              <Image source={selectedItem.img} style={estilos.modalImage} />
              <Texto style={estilos.itemName}>{selectedItem.title}</Texto>
              <Texto style={estilos.itemPrice}>{selectedItem.price}</Texto>
              <TouchableOpacity style={estilos.addButton} onPress={addToCart}>
                <Texto style={estilos.buttonText}>Adicionar ao carrinho</Texto>
              </TouchableOpacity>
              <Texto>{cartMessage}</Texto>
            </View>
          )}
        </View>
      </Modal>
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
    width: "48%",
    padding: 10,
    marginBottom: 10,
  },
  itemInfo: {
    marginTop: 5,
    padding: 5,
  },
  textBold: {
    fontWeight: "bold",
  },
  imageContainer: {
    width: "100%",
    height: 200,
    alignItems: "center",
  },
  image: {
    flex: 1,
    resizeMode: "contain",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  modalImage: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
  itemName: {
    fontWeight: "bold",
    marginBottom: 10,
  },
  itemPrice: {
    marginBottom: 20,
  },
  addButton: {
    backgroundColor: "#45DD12",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },


  closeButton: {
    position: "absolute",
    top: 10,
    right: 20,
    backgroundColor: "transparent",
    zIndex: 1,
  },
  closeButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
});

