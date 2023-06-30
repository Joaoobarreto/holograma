import axios from 'axios';

const API_URL = 'https://holograma.azurewebsites.net/';

const CartaoService = {
  criarCartao: async (dados) => {
    try {
      const response = await axios.post(`${API_URL}/cartao`, dados);
      return response.data;
    } catch (error) {
      console.error('Erro ao criar cratão:', error);
      throw error;
    }
  }
};

export default CartaoService;