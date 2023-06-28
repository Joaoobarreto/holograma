import axios from 'axios';

const API_URL = 'https://holograma.azurewebsites.net/';

const HologramaService = {
  listarHologramas: async () => {
    try {
      const response = await axios.get(`${API_URL}/holograma`);
      return response.data;
    } catch (error) {
      console.error('Erro ao obter a lista de hologramas:', error);
      throw error;
    }
  },

  getHologramaPorId: async (id) => {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error('Erro ao obter o holograma por ID:', error);
      throw error;
    }
  },

  atualizarHolograma: async (id, dadosAtualizados) => {
    try {
      const response = await axios.put(`${API_URL}/holograma/atualizar`, {
        id,
        ...dadosAtualizados,
      });
      return response.data;
    } catch (error) {
      console.error('Erro ao atualizar o holograma:', error);
      throw error;
    }
  },

  criarHolograma: async (dados) => {
    try {
      const response = await axios.post(`${API_URL}/holograma/criar`, dados);
      return response.data;
    } catch (error) {
      console.error('Erro ao criar o holograma:', error);
      throw error;
    }
  },
};

export default HologramaService;