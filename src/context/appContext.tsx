import React, { createContext, useState } from "react";
import { requestData } from "../services/request";


interface Idatas {
  nome: string,
  sobrenome: string,
  tratamento: string,
  valor: number,
  data_vencimento: string,
  status: string,
}

interface IState {
  datas: Idatas[] | null,
  getParcelas: (dateInicio: string, dateFinal: string) => void

}

const INITIAL_STATE :IState = {
  datas: [],
  getParcelas(): void {},
};

interface IProps {
  children: React.ReactNode,
}

const AppContext = createContext(INITIAL_STATE);


export const DataProvider = ({ children }: IProps) => {
  const [datas, setDatas] = useState(null);
  
  const getParcelas = async (dataInicial: string, dataFinal: string) => {
    const data = await requestData(`http://localhost:8080/parcelas?data_inicio=${dataInicial}&data_fim=${dataFinal}`)
    setDatas(data)
  }

  return (
    <AppContext.Provider value= {{datas, getParcelas}} >
      { children }
    </AppContext.Provider>
  )
}

export default AppContext