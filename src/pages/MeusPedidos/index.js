import { StatusBar, Button, Image, StyleSheet, TouchableOpacity, Text, View, SafeAreaView, Alert, ScrollView } from 'react-native';
import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { hologramas } from '../../data/data';

export default function MeusPedidos() {
  const Holo = hologramas.slice(0, 17);

  const renderPedidos = () => {
    const pedidos = [
      {
        numeroPedido: '#21755379',
        status: 'pendente',
        data: '25/11/2023',
        pagamento: 'Boleto Bancário',
        detalhes: 'Detalhes do pedido',
      },
      {
        numeroPedido: '#27154791',
        status: 'cancelado',
        data: '20/11/2023',
        pagamento: 'Estorno confirmado',
        detalhes: 'Detalhes do pedido',
      },
      {
        numeroPedido: '#32467853',
        status: 'concluído',
        data: '05/10/2023',
        pagamento: 'Cartão de crédito',
        detalhes: 'Detalhes do pedido',
      },
      {
        numeroPedido: '#43216578',
        status: 'concluído',
        data: '19/09/2023',
        pagamento: 'Cartão de débito',
        detalhes: 'Detalhes do pedido',
      },
      {
        numeroPedido: '#87543210',
        status: 'concluído',
        data: '02/09/2023',
        pagamento: 'PIX',
        detalhes: 'Detalhes do pedido',
      },
    ];
    return pedidos.map((pedido, index) => (
      <View style={styles.pedidoContainer} key={index}>
        <View style={styles.pedidoHeader}>
          <Text style={styles.numeroPedido}>{pedido.numeroPedido}</Text>
          <Text style={[styles.status, getStatusColor(pedido.status)]}>{pedido.status}</Text>
        </View>
        <View style={styles.pedidoInfo}>
          <View style={styles.pedidoDetails}>
            <TouchableOpacity style={styles.detalhesButton}>
              <Text style={styles.detalhesText}>{pedido.detalhes}</Text>
              <Ionicons name="arrow-down" size={20} color="blue" />
            </TouchableOpacity>
          </View>
          <View style={styles.pedidoPayment}>
            <Text style={styles.pagamento}>{pedido.pagamento}</Text>
          </View>
          <Text style={styles.data}>Data: {pedido.data}</Text>
        </View>
      </View>
    ));
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'concluído':
        return styles.statusConcluido;
      case 'cancelado':
        return styles.statusCancelado;
      case 'pendente':
        return styles.statusPendente;
      default:
        return {};
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Meus Pedidos</Text>
      <ScrollView>
        <View style={styles.pedidosContainer}>{renderPedidos()}</View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titulo: {
    margin: 20,
    fontWeight: 'bold',
    fontSize: 28,
  },
  pedidosContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  pedidoContainer: {
    marginBottom: 20,
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
  },
  pedidoHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  pedidoDetails: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 10,
  },
  pedidoPayment: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  numeroPedido: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  status: {
    fontWeight: 'bold',
  },
  statusConcluido: {
    color: 'green',
  },
  statusCancelado: {
    color: 'red',
  },
  statusPendente: {
    color: 'orange',
  },
  pedidoInfo: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  pagamento: {
    color: 'grey',
    
  },
  detalhesButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detalhesText: {
    color: 'blue',
    marginRight: 5,
  },
  borda: {
    borderWidth: 2,
    borderRadius: 10,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  itemNome: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    marginTop: 5,
    paddingLeft: 5,
  },

  data: {
    color: 'grey',
    marginTop: -15
    
  },
});
