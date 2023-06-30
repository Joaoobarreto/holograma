import { StyleSheet, TouchableOpacity, Text, View, SafeAreaView, ScrollView } from 'react-native';
import React, { useContext } from "react";
import { Ionicons } from '@expo/vector-icons';
import PedidoService from '../../services/PedidoService.service';
import { StoreContext } from '../../routes/routes';
import { format } from 'date-fns';


export default function MeusPedidos() {
  const { store } = useContext(StoreContext);
  const [pedidos, setPedidos] = React.useState([]);

  React.useEffect(() => {
    fetchPedidos();
  }, []);

  const fetchPedidos = async () => {
    try {
      const listaPedidos = await PedidoService.listarPedidos(store.usuario.id);
      setPedidos(listaPedidos);
    } catch (error) {
      // Tratar erros, exibir mensagem de erro, etc.
      console.error('Erro ao buscar os pedidos:', error);
    }
  };

  const renderPedidos = () => {
    
    return pedidos.map((pedido, index) => (
      <View style={styles.pedidoContainer} key={index}>
        <View style={styles.pedidoHeader}>
          <Text style={styles.numeroPedido}>#516819</Text>
          <Text style={[styles.status, getStatusColor(pedido.status)]}>{pedido.status}</Text>
        </View>
        <View style={styles.pedidoInfo}>
          <View style={styles.pedidoDetails}>
            <TouchableOpacity style={styles.detalhesButton}>
              <Text style={styles.detalhesText}>Detalhes do Pedido</Text>
              <Ionicons name="arrow-down" size={20} color="blue" />
            </TouchableOpacity>
          </View>
          <View style={styles.pedidoPayment}>
            <Text style={styles.pagamento}>Cartão</Text>
          </View>
          <Text style={styles.data}>{format(new Date(pedido.data), 'dd/MM/yyyy')}</Text>
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