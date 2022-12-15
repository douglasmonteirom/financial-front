import { useState } from 'react'
import { Field, ContainerForm, TitleForm, ContainerInput, Label, InputName, InputDate, ContainerButoons, Button, MensageForm } from '../../globalStyles'
import { newData } from '../../services/request'
import { InputPg, InputValue } from './styles'

const DEFAUTL_TRATAMENTO = {
  nomeT: "",
  valor: 0,
  quantidade_parcelas: 0,
  forma_pagamento: "",
  vencimento: "",
  entrada: 0
}

const DEFAULT_STATUS = {
  type: "",
  mensagem: ""
}

export default function FormTratamento() {

  const [tratamento, setTratamento] = useState(DEFAUTL_TRATAMENTO)

  const calcParcela = () => {
    const parcela = ((tratamento.valor - tratamento.entrada)/tratamento.quantidade_parcelas)
    return parcela
  }

  const handlerTratamento = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTratamento({
      ...tratamento,
      [e.target.name]: e.target.value,
    })
  }

  function addDaysToDate(date: string, days: number){
    var res = new Date(date);
    res.setDate(res.getDate() + days);
    return res.toISOString()
}

  const cadastraParcelas = async(id: string) => {
    var cont = 0;
    var date = tratamento.vencimento;
    var statusControl = []
    while (cont < tratamento.quantidade_parcelas) {
      const { status } = await newData('/parcelas', {
        valor: calcParcela(),
        vencimento: date,
        status: "aberto",
        tratamento_id: id
      })
      statusControl.push(status)
      date = addDaysToDate(date, 30)
      cont ++
    }
    if(statusControl.every((e) => e == 201)){
      setStatus({
        type: "success",
        mensagem: "Tratamento cadastrado com sucesso!"
      });
      setTratamento(DEFAUTL_TRATAMENTO)
    }else{
      setStatus({
        type: "error",
        mensagem: "Erro ao cadastrar tratamento!"
      })
    }
  }

  const cadastraTratamento = async () => {
    if(!validateTratamento()) return
    const paciente_id = localStorage.getItem('user') || '';

    const {data} = await newData('/tratamento', {
      nome: tratamento.nomeT,
      valor: tratamento.valor,
      forma_pagamento: tratamento.forma_pagamento,
      paciente_id
    })
    cadastraParcelas(data.tratamento_id)
  }

  const [status, setStatus] = useState(DEFAULT_STATUS)

  const validateTratamento = () => {
    if(!tratamento.nomeT) return setStatus( {type: "error", mensagem: "O campo Nome é obrigatório"})
    if(!tratamento.valor) return setStatus( {type: "error", mensagem: "O campo Valor Total é obrigatório"})
    if(!tratamento.quantidade_parcelas) return setStatus( {type: "error", mensagem: "O campo Quantidade de Parcelas é obrigatório"})
    if(!tratamento.forma_pagamento) return setStatus( {type: "error", mensagem: "O campo Forma de Pagamento é obrigatório"})
    if(!tratamento.vencimento) return setStatus( {type: "error", mensagem: "O campo Data de Vencimento é obrigatório"})
    return true
  }

  return (
    <ContainerForm>
      <Field>
        <legend>
          <TitleForm>Cadastrar Tratamento</TitleForm>
        </legend>
        {status.type === 'error' && <MensageForm>{status.mensagem}</MensageForm> }
        {status.type === 'success' && <MensageForm>{status.mensagem}</MensageForm> }
        <ContainerInput>
          <Label htmlFor="nomeT">Nome do Tratamento: </Label>
          <InputName 
            id="nomeT"
            name="nomeT"
            value={tratamento.nomeT}
            onChange={(e) => handlerTratamento(e)}
          />
        </ContainerInput>
        <ContainerInput>
          <Label htmlFor="valor-tratamento">Valor Total: </Label>
          <InputValue 
            id="valor-tratamento"
            name="valor"
            value={tratamento.valor}
            onChange={(e) => handlerTratamento(e)}
          />
        </ContainerInput>
        <ContainerInput>
          <Label htmlFor="qnt-parcelas">Quantidade de Parcelas: </Label>
          <InputValue 
            id="qnt-parcelas"
            name="quantidade_parcelas"
            value={tratamento.quantidade_parcelas}
            onChange={(e) => handlerTratamento(e)}
          />
        </ContainerInput>
        <ContainerInput>
          <p>Forma de Pagamento:</p>
          <div>
            <Label htmlFor="pg-av">Avista: </Label>
            <InputPg 
              id="pg-av"
              onChange={(e) => handlerTratamento(e)} 
              name="forma_pagamento" 
              value="avista" 
            />
            <Label htmlFor="pg-par">Parcelado: </Label>
            <InputPg
              id="pg-par" 
              onChange={(e) => handlerTratamento(e)} 
              name="forma_pagamento"
              value="parcelado"
            />
          </div>
        </ContainerInput>
        <ContainerInput>
          <Label htmlFor="data-vencimento">Data de vencimento: </Label>
          <InputDate 
            id="data-vencimento"
            name="vencimento"
            value={tratamento.vencimento}
            onChange={(e) => handlerTratamento(e)}
          />
        </ContainerInput>
        <ContainerInput>
          <Label htmlFor="valor-entrada">Valor de Entrada: </Label>
          <InputValue 
            id="valor-entrada"
            name="entrada"
            value={tratamento.entrada}
            onChange={(e) => handlerTratamento(e)}
          />
        </ContainerInput>
        <ContainerButoons>
          <Button onClick={cadastraTratamento} >Cadastrar</Button>
        </ContainerButoons>
      </Field>
    </ContainerForm>
  )
}
