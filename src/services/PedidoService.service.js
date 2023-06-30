import axios from 'axios';

const API_URL = 'https://holograma.azurewebsites.net/';

const PedidoService = {
  criarPedido: async (dados) => {
    try {
      const response = await axios.post(`${API_URL}/pedido/novo`, dados);
      return response.data;
    } catch (error) {
      console.error('Erro ao criar pedido:', error);
      throw error;
    }
  },
  listarPedidos: async (id) => {
    try {
      const response = await axios.get(`${API_URL}/pedido/listar-por-usuario/${id}`);
      return response.data;
    } catch (error) {
      console.error('Erro ao listar pedidos:', error);
      throw error;
    }
  }
};

export default PedidoService;