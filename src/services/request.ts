import axios from 'axios';

interface IUser {
  nome: string,
  sobrenome: string,
  cpf: string,
  nascimento: string,
}

interface Itratamento {
  nome: string,
  valor: number,
  forma_pagamento: string,
  paciente_id: string
}

interface Iparcela {
  valor: number,
  vencimento: string,
  status?: string,
  tratamento_id: string
}

const api = axios.create({
  baseURL: `http://localhost:8080`,
});

export const requestData = async (endpoint: string) => {
  const { data } = await api.get(endpoint);
  return data;
};

export const newData = async (endpoint: string, body: IUser | Itratamento | Iparcela) => {
  const data = await api.post(endpoint, body);
  return data;
};

export default api;