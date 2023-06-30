import React, { useContext, useState } from "react";
import {
  ScrollView,
  View,
  Image,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Alert,
} from "react-native";
import Texto from "../Texto";
import { StoreContext } from '../../routes/routes.js';

export default function HoloList({ items }) {
  const { store } = useContext(StoreContext);
  const [selectedItem, setSelectedItem] = useState(null);

  const renderItems = () => {
    return items?.map((holo) => (
      <TouchableOpacity
        style={items.length > 1 ? estilos.item : estilos.itemSolo}
        key={holo.id}
        onPress={() => setSelectedItem(holo)}
      >
        <View style={estilos.imageContainer}>
          <Image source={holo.arquivoId} style={estilos.image} />
        </View>
        <View style={estilos.itemInfo}>
          <Texto style={estilos.textBold}>{holo.descricao}</Texto>
          <Texto>{holo.valor}</Texto>
        </View>
      </TouchableOpacity>
    ));
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  const addToCart = (selectedItem) => {
    if (!store.usuario.nome) {
      Alert.alert("Atenção", "É preciso estar logado para adicionar um holograma ao carrinho.");
    } else {
      store.carrinho.push(selectedItem);
      closeModal();
    }
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
              <Image source={selectedItem.arquivoId} style={estilos.modalImage} />
              <Texto style={estilos.itemName}>{selectedItem.descricao}</Texto>
              <Texto style={estilos.itemPrice}>{selectedItem.valor}</Texto>
              <TouchableOpacity style={estilos.addButton} onPress={() => addToCart(selectedItem)}>
                <Texto style={estilos.buttonText}>Adicionar ao carrinho</Texto>
              </TouchableOpacity>
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
  },
  itemSolo: {
    width: "100%",
    padding: 10,
    marginBottom: 10,
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
  noItemsContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  noItemsText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});