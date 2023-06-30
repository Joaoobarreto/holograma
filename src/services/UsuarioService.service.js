import axios from 'axios';

const API_URL = 'https://holograma.azurewebsites.net/';

const UsuarioService = {
  getUsuario: async (id) => {
    try {
      const response = await axios.get(`${API_URL}/usuario/${id}`);
      return response.data;
    } catch (error) {
      console.error('Erro ao obter a lista de usuarios:', error);
      throw error;
    }
  },
  getUsuarioPorToken: async (token) => {
    try {
      const response = await axios.get(`${API_URL}/usuario/por-token/${token}`);
      return response.data;
    } catch (error) {
      console.error('Erro ao obter a lista de usuarios:', error);
      throw error;
    }
  },
  atualizarUsuario: async (dados) => {
    try {
      const response = await axios.post(`${API_URL}/usuario/atualizar`, dados);
      return response.data;
    } catch (error) {
      console.error('Erro atualizar usuario:', error);
      throw error;
    }
  },
  criarUsuario: async (dados) => {
    try {
      const response = await axios.post(`${API_URL}/usuario/criar`, dados);
      return response.data;
    } catch (error) {
      console.error('Erro atualizar usuario:', error);
      throw error;
    }
  },
};

export default UsuarioService;