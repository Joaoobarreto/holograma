import { Button, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import * as React from 'react';
import { MaterialIcons } from 'react-native-vector-icons';

export default function Cart({ navigation }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

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
            <Text style={styles.deliveryAddress}>SQN 308 Bloco D 402, BSB</Text>
          </View>
          <Text style={styles.deliveryFast}>ENTREGA RÁPIDA: 17/11/23</Text>
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.paymentContainer}>
        <View style={styles.paymentInfo}>
          <View style={styles.deliveryContainer}>
            <Text style={styles.paymentTitleLeft}>Forma de pagamento</Text>
            <Text style={styles.paymentMethod}>Visa ***678</Text>
          </View>
          <Text style={styles.paymentExpiration}>Vence em 02/27</Text>
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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 100,
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
    alignItems: 'center',
    marginBottom: 5,
  },
  deliveryTitle: {
    color: '#0A1034',
    fontStyle: 'italic',
    fontSize: 19,
    marginRight: 5,
  },
  deliveryAddress: {
    color: '#0001FC',
    fontSize: 16,
    alignSelf: 'flex-end',
    flexWrap: 'wrap',
    maxWidth: 200,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginLeft: 'auto',
    fontWeight: 'bold'
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
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  deleteIconContainer: {
    position: 'absolute',
    top: 5,
    right: 5,
  },
});