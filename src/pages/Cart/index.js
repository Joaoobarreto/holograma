import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Modal, TextInput } from 'react-native';
import { MaterialIcons } from 'react-native-vector-icons';

export default function Cart({ navigation }) {
  const [isModalVisible, setModalVisible] = useState(false);
  const [cep, setCep] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [complemento, setComplemento] = useState('');
  const [numero, setNumero] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [address, setAddress] = useState('Clique para adicionar um endereço');
  const [isCardModalVisible, setCardModalVisible] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [cardCVV, setCardCVV] = useState('');
  const [cardMonth, setCardMonth] = useState('');
  const [cardYear, setCardYear] = useState('');
  const [cardName, setCardName] = useState('');
  const [displayCard, setDisplayCard] = useState('Clique para adicionar um cartão');


  const handleAddressConfirm = () => {
    setAddress(`${logradouro}, ${numero}, ${complemento}, ${cidade}, ${estado}, ${cep}`);
    setModalVisible(false);
  };

  const handleCardConfirm = () => {
    const lastThreeDigits = cardNumber.slice(-3);
    setDisplayCard(`*** ${lastThreeDigits}`);
    setCardModalVisible(false);
  };
  

  
  const handleCepInput = (text) => {
    setCep(text);
  };

  const handleLogradouroInput = (text) => {
    setLogradouro(text);
  };

  const handleComplementoInput = (text) => {
    setComplemento(text);
  };

  const handleNumeroInput = (text) => {
    setNumero(text);
  };

  const handleCidadeInput = (text) => {
    setCidade(text);
  };

  const handleEstadoInput = (text) => {
    setEstado(text);
  };

  const handleAddressEdit = () => {
    if (address === 'Clique para adicionar um endereço') {
      setModalVisible(true);
    }
  };

  

  return (
  <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Pagamento</Text>
      </View>
      <ScrollView horizontal={true}>
        <View style={styles.productContainer}>
          <View style={[styles.productBox, styles.ironManBox]}>
            <View style={styles.deleteIconContainer}>
              <TouchableOpacity onPress={() => {}}>
                <MaterialIcons name="close" size={24} color="#000" />
              </TouchableOpacity>
            </View>
            <View style={styles.tagContainer}>
              <Text style={styles.tagText}>novo</Text>
            </View>
            <View style={styles.imageBox}>
              <Image
                source={require('../../../assets/IronMan_WireFrame.png')}
                style={styles.productImage}
              />
            </View>
            <View style={styles.productDetails}>
              <Text style={styles.productName}>Iron Man</Text>
              <Text style={styles.productPrice}>R$ 89,90</Text>
              <Text style={styles.productQuantity}>x1</Text>
            </View>
          </View>
          <View style={[styles.productBox, styles.darthVaderBox]}>
            <View style={styles.deleteIconContainer}>
              <TouchableOpacity onPress={() => {}}>
                <MaterialIcons name="close" size={24} color="#000" />
              </TouchableOpacity>
            </View>
            <View style={styles.tagContainer}>
              <Text style={styles.tagText}>novo</Text>
            </View>
            <View style={styles.imageBox}>
              <Image
                source={require('../../../assets/Darth_Vader_Holo.png')}
                style={styles.productImage}
              />
            </View>
            <View style={styles.productDetails}>
              <Text style={styles.productName}>Darth Vader</Text>
              <Text style={styles.productPrice}>R$ 79,00</Text>
              <Text style={styles.productQuantity}>x1</Text>
            </View>
          </View>
        </View>
    </ScrollView>
      <View style={styles.paymentContainer}>
        <View style={styles.paymentInfo}>
          <View style={styles.deliveryContainer}>
            <Text style={styles.deliveryTitle}>Entrega</Text>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <Text style={styles.deliveryAddress}>
               {address !== 'Clique para adicionar um endereço' ? address : 'Clique para adicionar um endereço'}
              </Text>
            </TouchableOpacity>

  
          </View>
          <Text style={styles.deliveryFast}>ENTREGA RÁPIDA: 17/11/23</Text>
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.paymentContainer}>
        <View style={styles.paymentInfo}>
        <TouchableOpacity style={styles.deliveryContainer} onPress={() => setCardModalVisible(true)}>
          <Text style={styles.paymentTitleLeft}>Forma de pagamento</Text>
          <Text style={styles.paymentMethod}>
            {displayCard !== 'Clique para adicionar um cartão' ? displayCard : 'Clique para adicionar um cartão'}
          </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.paymentContainer}>
        <View style={styles.paymentInfo}>
          <View style={styles.deliveryContainer}>
            <Text style={styles.paymentTitleLeft}>Total</Text>
            <Text style={styles.paymentMethod}>R$174,50</Text>
          </View>
          <Text style={[styles.discountCode, styles.rightAlign]}>Insira um código de desconto</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Confirmar pagamento</Text>
      </TouchableOpacity>

      <Modal visible={isModalVisible} transparent={true} animationType="fade">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Adicionar Endereço</Text>
            <ScrollView>
              <TextInput
                style={styles.addressInput}
                placeholder="CEP"
                onChangeText={handleCepInput}
                value={cep}
              />
              <TextInput
                style={styles.addressInput}
                placeholder="Logradouro"
                onChangeText={handleLogradouroInput}
                value={logradouro}
              />
              <TextInput
                style={styles.addressInput}
                placeholder="Complemento"
                onChangeText={handleComplementoInput}
                value={complemento}
              />
              <TextInput
                style={styles.addressInput}
                placeholder="Número"
                onChangeText={handleNumeroInput}
                value={numero}
              />
              <TextInput
                style={styles.addressInput}
                placeholder="Cidade"
                onChangeText={handleCidadeInput}
                value={cidade}
              />
              <TextInput
                style={styles.addressInput}
                placeholder="Estado"
                onChangeText={handleEstadoInput}
                value={estado}
              />
            </ScrollView>
            <TouchableOpacity style={styles.modalButton} onPress={handleAddressConfirm}>
              <Text style={styles.modalButtonText}>Confirmar</Text>
            </TouchableOpacity>

          </View>
        </View>
      </Modal>
      <Modal visible={isCardModalVisible} transparent={true} animationType="fade">
  <View style={styles.modalContainer}>
    <View style={styles.modalContent}>
      <Text style={styles.modalTitle}>Adicionar Cartão</Text>
      <ScrollView>
        <TextInput
          style={styles.addressInput}
          placeholder="Número"
          onChangeText={setCardNumber}
          value={cardNumber}
        />
        <TextInput
          style={styles.addressInput}
          placeholder="CVV"
          onChangeText={setCardCVV}
          value={cardCVV}
        />
        <TextInput
          style={styles.addressInput}
          placeholder="Mês"
          onChangeText={setCardMonth}
          value={cardMonth}
        />
        <TextInput
          style={styles.addressInput}
          placeholder="Ano"
          onChangeText={setCardYear}
          value={cardYear}
        />
        <TextInput
          style={styles.addressInput}
          placeholder="Nome"
          onChangeText={setCardName}
          value={cardName}
        />
      </ScrollView>
      <TouchableOpacity style={styles.modalButton} onPress={handleCardConfirm}>
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
    backgroundColor: '#fff',
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  headerContainer: {
    marginBottom: 20,
    
  },
  headerTitle: {
    color: '#0A1034',
    fontStyle: 'italic',
    fontWeight: '100',
    fontSize: 32,
  },
  productContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  productBox: {
    width: '48%',
    marginBottom: 20,
    backgroundColor: '#F6F6F6',
    borderRadius: 10,
    padding: 10,
  },
  ironManBox: {
    backgroundColor: '#FAFAFA',
  },
  darthVaderBox: {
    backgroundColor: '#FAFAFA',
  },
  imageBox: {
    marginBottom: 10,
    alignItems: 'center',
  },
  tagContainer: {
    backgroundColor: '#E0ECF8',
    paddingHorizontal: 8,
    paddingVertical: 2,
    flexWrap: 'wrap',
    maxWidth: 40,
    marginBottom: 10,
  },
  tagText: {
    color: '#1F53E4',
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
    color: '#0A1034',
    fontStyle: 'italic',
    fontSize: 16,
    marginBottom: 5,
  },
  productPrice: {
    color: '#0001FC',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
  },
  productQuantity: {
    color: '#1F53E4',
    fontSize: 12,
    alignSelf: 'flex-end',
    flexWrap: 'wrap',
    maxWidth: 30,
    backgroundColor: '#E0ECF8',
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  paymentContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  paymentInfo: {
    flex: 1,
  },
  deliveryContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  
    
  },
  deliveryTitle: {
    color: '#0A1034',
    fontStyle: 'italic',
    fontSize: 19,
    alignSelf: 'flex-start'

  },
  deliveryAddress: {
    color: '#0001FC',
    fontSize: 16,
    alignSelf: 'flex-end',
    flexWrap: 'wrap',
    maxWidth: 300,
    paddingHorizontal: 13,
    paddingVertical: 2,
    marginLeft: 'auto',
    fontWeight: 'bold',

  },
  deliveryFast: {
    color: '#555555',
    fontSize: 12,
    alignSelf: 'flex-end',
  },
  divider: {
    height: 1,
    backgroundColor: '#D3D3D3',
    marginBottom: 20,
  },
  paymentTitleLeft: {
    color: '#0A1034',
    fontStyle: 'italic',
    fontSize: 19,
    marginRight: 5,
  },
  paymentMethod: {
    color: '#0001FC',
    fontSize: 16,
    alignSelf: 'flex-end',
    flexWrap: 'wrap',
    maxWidth: 200,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginLeft: 'auto',
    fontWeight: 'bold',
  },
  paymentExpiration: {
    color: '#555555',
    fontSize: 12,
    alignSelf: 'flex-end',
  },
  discountCode: {
    color: '#00CC00',
    fontSize: 12,
    marginTop: 5,
  },
  rightAlign: {
    alignSelf: 'flex-end',
  },
  button: {
    backgroundColor: '#0135EB',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
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
