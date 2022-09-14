import axios from "axios";

export const useModelos = async (proyecto, privada, modelo) => {
  const url = `https://siicumbres.com/api/precios/lista?proyecto=${proyecto}&privada=${privada}&modelo=${modelo}`;
  let data = [];

  const response = await axios.get(url);
  data = response.data;

  return data;
};
