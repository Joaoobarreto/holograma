import axios from 'axios';

const API_URL = 'https://holograma.azurewebsites.net/';

const CategoriaService = {
  listarCategorias: async () => {
    try {
      const response = await axios.get(`${API_URL}/categoria`);
      return response.data;
    } catch (error) {
      console.error('Erro ao obter a lista de categorias:', error);
      throw error;
    }
  }
};

export default CategoriaService;