import { ref } from "vue";
import axios from "axios";

export const useModelos = async () => {
  const data = ref([]);
  try {
    const modelos = await axios.get(
      "https://siicumbres.com/api/precios/lista?proyecto=Catara&privada=Varese&modelo=Monet"
    );

    data.value = modelos.data;
    console.log(data.value);
  } catch (error) {
    console.log(error);
  }

  return data;
};
