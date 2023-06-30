import React, { useState, useContext, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Modal,
  TextInput,
  RefreshControl,
} from "react-native";
import { MaterialIcons } from "react-native-vector-icons";
import { StoreContext } from "../../routes/routes";
import UsuarioService from "../../services/UsuarioService.service";
import CartaoService from "../../services/CartaoService.service";
import PedidoService from "../../services/PedidoService.service";
import Texto from "../../components/Texto";
import { AntDesign } from '@expo/vector-icons';
import { useRoute, useNavigation } from '@react-navigation/native';

export default function Cart({ navigation }) {
  const [refreshing, setRefreshing] = React.useState(false);
  const { store } = useContext(StoreContext);
  const [isModalVisible, setModalVisible] = useState(false);
  const [pedido, setPedido] = useState({
    usuarioId: store.usuario?.endereco.usuarioId,
    tipoPagamentoId: 1,
    cartaoId: null,
    hologramas: store.carrinho.map((holo) => holo.id),
    enderecoId: store.usuario?.endereco?.id,
  });
  const VerificarExisteEndereco = () => {
    return store.usuario?.endereco
      ? {
          cep: store.usuario?.endereco.cep,
          logradouro: store.usuario?.endereco.logradouro,
          complemento: store.usuario?.endereco.complemento,
          numero: store.usuario?.endereco.numero,
          cidade: store.usuario?.endereco.cidade,
          estado: store.usuario?.endereco.estado,
        }
      : {
          cep: "",
          logradouro: "",
          complemento: "",
          numero: 0,
          cidade: "",
          estado: "",
        };
  };
  const [addressInputs, setAddressInputs] = useState(VerificarExisteEndereco());
  const [showConfirmation, setShowConfirmation] = useState(false);

  const [address, setAddress] = useState(VerificarExisteEndereco());
  const [isCardModalVisible, setCardModalVisible] = useState(false);
  const [displayCard, setDisplayCard] = useState({
    numero: "",
    cvv: null,
    mes: null,
    ano: null,
    usuarioId: store.usuario?.endereco?.usuarioId,
    nome: "",
  });

  const handleRemoveFromCart = (index) => {
    store.carrinho.splice(index, 1);
    setRefreshing(true)
  };

  const handleAddressConfirm = () => {
    var enderecoId = null;
    setAddress(addressInputs);
    setModalVisible(false);
    store.usuario.endereco = addressInputs;
    UsuarioService.atualizarUsuario(store.usuario).then(
      (obj) => (enderecoId = obj.id)
    );
    setPedido((prevPedido) => ({
      ...prevPedido,
      enderecoId: enderecoId,
    }));
  };

  const handleInputChange = (field, value) => {
    setAddressInputs((prevInputs) => ({
      ...prevInputs,
      [field]: value,
    }));
  };

  const setCardInputs = (field, value) => {
    setDisplayCard((prevInputs) => ({
      ...prevInputs,
      [field]: value,
    }));
  };

  const handleCardConfirm = async () => {
    var cartaoId = null;
    await CartaoService.criarCartao(displayCard).then((obj) => {
      cartaoId = obj.id;
    });
    setPedido((prevPedido) => ({
      ...prevPedido,
      cartaoId: cartaoId,
    }));
    setCardModalVisible(false);
  };

  const confirmarPedido = () => {
    PedidoService.criarPedido(pedido)
      .then((response) => {
        
        setShowConfirmation(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  useEffect(() => {
    console.log(showConfirmation)
    if (showConfirmation) {
      const timer = setTimeout(() => {
        setShowConfirmation(false);
      }, 3000);

      return () => {
        clearTimeout(timer);
        store.carrinho = []
      };
    }
  }, [showConfirmation]);

  const calcularValorTotal = () => {
    var valorTotal = 0;
    for (var i = 0; i < store.carrinho?.length; i++) {
      valorTotal += store.carrinho[i].valor;
    }
    return valorTotal;
  };

  return (
    <ScrollView style={styles.container} refreshControl={
      <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
    }>
      {store.carrinho.length > 0 ? (
        <View>
          <ScrollView horizontal={true}>
            <View style={styles.productContainer}>
              {store.carrinho?.map((item, index) => (
                <View
                  key={index}
                  style={
                    store.carrinho.length > 1
                      ? styles.productBox
                      : styles.productBoxAlone
                  }
                >
                  <View style={styles.deleteIconContainer}>
                    <TouchableOpacity
                      onPress={() => handleRemoveFromCart(index)}
                    >
                      <MaterialIcons name="close" size={24} color="#000" />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.imageBox}>
                    <Image
                      source={item.arquivoId}
                      style={styles.productImage}
                    />
                  </View>
                  <View style={styles.productDetails}>
                    <Text style={styles.productName}>{item.descricao}</Text>
                    <Text style={styles.productPrice}>R$ {item.valor}</Text>
                  </View>
                </View>
              ))}
            </View>
          </ScrollView>

          <View style={styles.paymentContainer}>
            <View style={styles.paymentInfo}>
              <View style={styles.deliveryContainer}>
                <Text style={styles.deliveryTitle}>Entrega</Text>
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                  <Text style={styles.deliveryAddress}>
                    {address.logradouro && address.numero
                      ? `${address.logradouro} ${address.numero}, ${address.cidade} - ${address.estado}`
                      : "Clique para adicionar um endereço"}
                  </Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.deliveryFast}>ENTREGA RÁPIDA: 17/11/23</Text>
            </View>
          </View>
          <View style={styles.divider} />
          <View style={styles.paymentContainer}>
            <View style={styles.paymentInfo}>
              <TouchableOpacity
                style={styles.deliveryContainer}
                onPress={() => setCardModalVisible(true)}
              >
                <Text style={styles.paymentTitleLeft}>Forma de pagamento</Text>
                <Text style={styles.paymentMethod}>
                  {displayCard.nome
                    ? `*** ${displayCard.numero.slice(-4)}`
                    : "Clique para adicionar um cartão"}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.divider} />
          <View style={styles.paymentContainer}>
            <View style={styles.paymentInfo}>
              <View style={styles.deliveryContainer}>
                <Text style={styles.paymentTitleLeft}>Total</Text>
                <Text style={styles.paymentMethod}>{calcularValorTotal()}</Text>
              </View>
              <Text style={[styles.discountCode, styles.rightAlign]}>
                Insira um código de desconto
              </Text>
            </View>
          </View>
          <TouchableOpacity style={styles.button} onPress={confirmarPedido}>
            <Text style={styles.buttonText}>Confirmar pagamento</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <Text style={styles.emptyCartText}>Não há itens no carrinho.</Text>
      )}

<Modal visible={showConfirmation} transparent={true} animationType="fade">
        <View style={styles.modalContainer}>
          <View style={styles.modalConfirmation}>
            <AntDesign name="checkcircleo" size={24} color="black" />
            <Texto style={styles.confirmationText}>Pedido confirmado</Texto>
          </View>
        </View>
      </Modal>

      <Modal visible={isModalVisible} transparent={true} animationType="fade">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Adicionar Endereço</Text>
            <ScrollView>
              <TextInput
                style={styles.addressInput}
                placeholder="CEP"
                onChangeText={(value) => handleInputChange("cep", value)}
                value={addressInputs.cep}
              />
              <TextInput
                style={styles.addressInput}
                placeholder="Logradouro"
                onChangeText={(value) => handleInputChange("logradouro", value)}
                value={addressInputs.logradouro}
              />
              <TextInput
                style={styles.addressInput}
                placeholder="Complemento"
                onChangeText={(value) =>
                  handleInputChange("complemento", value)
                }
                value={addressInputs.complemento}
              />
              <TextInput
                style={styles.addressInput}
                placeholder="Número"
                keyboardType="numeric"
                onChangeText={(value) => handleInputChange("numero", value)}
                value={addressInputs.numero.toString()}
              />
              <TextInput
                style={styles.addressInput}
                placeholder="Cidade"
                onChangeText={(value) => handleInputChange("cidade", value)}
                value={addressInputs.cidade}
              />
              <TextInput
                style={styles.addressInput}
                placeholder="Estado"
                onChangeText={(value) => handleInputChange("estado", value)}
                value={addressInputs.estado}
              />
            </ScrollView>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={handleAddressConfirm}
            >
              <Text style={styles.modalButtonText}>Confirmar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal
        visible={isCardModalVisible}
        transparent={true}
        animationType="fade"
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Adicionar Cartão</Text>
            <ScrollView>
              <TextInput
                style={styles.addressInput}
                placeholder="Número"
                onChangeText={(value) => setCardInputs("numero", value)}
                value={displayCard.numero}
              />
              <TextInput
                style={styles.addressInput}
                placeholder="CVV"
                keyboardType="numeric"
                onChangeText={(value) => {
                  const adjustedValue = value.slice(0, 3);
                  setCardInputs("cvv", value);
                }}
                value={displayCard.cvv}
              />
              <TextInput
                style={styles.addressInput}
                placeholder="Mês"
                keyboardType="numeric"
                onChangeText={(value) => {
                  const adjustedValue = value.slice(0, 2);
                  setCardInputs("mes", value);
                }}
                value={displayCard.mes}
              />
              <TextInput
                style={styles.addressInput}
                placeholder="Ano"
                keyboardType="numeric"
                onChangeText={(value) => {
                  const adjustedValue = value.slice(0, 4);
                  setCardInputs("ano", adjustedValue);
                }}
                value={displayCard.ano}
              />
              <TextInput
                style={styles.addressInput}
                placeholder="Nome"
                onChangeText={(value) => setCardInputs("nome", value)}
                value={displayCard.nome}
              />
            </ScrollView>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={handleCardConfirm}
            >
              <Text style={styles.modalButtonText}>Confirmar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  headerContainer: {
    marginBottom: 20,
    
  },
  headerTitle: {
    color: "#0A1034",
    fontStyle: "italic",
    fontWeight: "100",
    fontSize: 32,
  },
  productContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 20,
    justifyContent: "space-between",
  },
  productBox: {
    width: "48%",
    marginBottom: 20,
    backgroundColor: "#F6F6F6",
    borderRadius: 10,
    padding: 10,
  },
  productBoxAlone: {
    marginBottom: 20,
    backgroundColor: "#F6F6F6",
    borderRadius: 10,
    padding: 10,
  },
  ironManBox: {
    backgroundColor: "#FAFAFA",
  },
  darthVaderBox: {
    backgroundColor: "#FAFAFA",
  },
  imageBox: {
    marginBottom: 10,
    alignItems: "center",
  },
  tagContainer: {
    backgroundColor: "#E0ECF8",
    paddingHorizontal: 8,
    paddingVertical: 2,
    flexWrap: "wrap",
    maxWidth: 40,
    marginBottom: 10,
  },
  tagText: {
    color: "#1F53E4",
    fontSize: 10,
  },
  productImage: {
    width: 150,
    height: 150,
  },
  productDetails: {
    paddingHorizontal: 10,
  },
  productName: {
    color: "#0A1034",
    fontStyle: "italic",
    fontSize: 16,
    marginBottom: 5,
  },
  productPrice: {
    color: "#0001FC",
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 5,
  },
  productQuantity: {
    color: "#1F53E4",
    fontSize: 12,
    alignSelf: "flex-end",
    flexWrap: "wrap",
    maxWidth: 30,
    backgroundColor: "#E0ECF8",
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  paymentContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  paymentInfo: {
    flex: 1,
  },
  deliveryContainer: {
    flexDirection: "row",
    marginBottom: 5,
  
    
  },
  deliveryTitle: {
    color: "#0A1034",
    fontStyle: "italic",
    fontSize: 19,
    alignSelf: "flex-start",
  },
  deliveryAddress: {
    color: "#0001FC",
    fontSize: 16,
    alignSelf: "flex-end",
    flexWrap: "wrap",
    maxWidth: 300,
    paddingHorizontal: 13,
    paddingVertical: 2,
    marginLeft: "auto",
    fontWeight: "bold",
  },
  deliveryFast: {
    color: "#555555",
    fontSize: 12,
    alignSelf: "flex-end",
  },
  divider: {
    height: 1,
    backgroundColor: "#D3D3D3",
    marginBottom: 20,
  },
  paymentTitleLeft: {
    color: "#0A1034",
    fontStyle: "italic",
    fontSize: 19,
    marginRight: 5,
  },
  paymentMethod: {
    color: "#0001FC",
    fontSize: 16,
    alignSelf: "flex-end",
    flexWrap: "wrap",
    maxWidth: 200,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginLeft: "auto",
    fontWeight: "bold",
  },
  paymentExpiration: {
    color: "#555555",
    fontSize: 12,
    alignSelf: "flex-end",
  },
  discountCode: {
    color: "#00CC00",
    fontSize: 12,
    marginTop: 5,
  },
  rightAlign: {
    alignSelf: "flex-end",
  },
  button: {
    backgroundColor: "#0135EB",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: "90%",
  },
  modalTitle: {
    color: "#0A1034",
    fontSize: 16,
    marginBottom: 10,
    fontWeight: "bold",
  },
  addressInput: {
    backgroundColor: "#F6F6F6",
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
  },
  modalButton: {
    backgroundColor: "#0135EB",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  modalButtonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '90%',
  },
  modalTitle: {
    color: '#0A1034',
    fontSize: 16,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  addressInput: {
    backgroundColor: '#F6F6F6',
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
  },
  modalButton: {
    backgroundColor: '#0135EB',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  modalButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
