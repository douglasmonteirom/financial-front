import { ContainerList } from './styles'
import { useContext } from 'react'
import AppContext from '../../context/appContext'

export default function List() {
  const { datas } = useContext(AppContext)

  return (
    <ContainerList>
      <ul>
        {datas?.map(({nome, sobrenome, data_vencimento, valor, tratamento}) =>(
          <li key={nome+sobrenome+tratamento+data_vencimento} >
            <p>{`${nome} ${sobrenome}`}</p>
            <p>{tratamento}</p>
            <p>{data_vencimento}</p>
            <p>R$ {valor}</p>
          </li>
        ))}
      </ul>
  </ContainerList>
  )
}
