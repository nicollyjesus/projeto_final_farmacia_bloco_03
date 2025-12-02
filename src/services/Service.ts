import axios from "axios";

const api = axios.create({

    baseURL: import.meta.env.VITE_API_URL

})

// Função Buscar
// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export const buscar = async (url: string, setDados: Function) => {
    const resposta = await api.get(url);
    setDados(resposta.data); /* Atualiza os dados do objeto */
}

//Função Cadastrar
// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export const cadastrar = async (url: string, dados: object, setDados: Function) => {
    const resposta = await api.post(url, dados);
    setDados(resposta.data); /* Atualiza os dados do objeto */
}

//Função Atualizar
export const atualizar = async (url: string, dados: object, setDados: Function) => {
    const resposta = await api.put(url, dados);
    setDados(resposta.data); /* Atualiza os dados do objeto */
}

//Função Deletar
export const deletar = async (url: string) => {
    await api.delete(url);
    
}