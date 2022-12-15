import { useState } from "react";
import { Button, ContainerButoons, ContainerForm, ContainerInput, InputName, Label, TitleForm, InputDate, Field, MensageForm } from "../../globalStyles";
import { newData, requestData } from "../../services/request";

const DEFAULT_USER = {
  nome: "",
  sobrenome: "",
  cpf: '',
  nascimento: "",
}

const DEFAULT_STATUS = {
  type: "",
  mensagem: ""
}

export default function Formpaciente() {

  const [user, setUser] = useState(DEFAULT_USER)
  const [status, setStatus] = useState(DEFAULT_STATUS)

  const validateCadastro = () => {
    if(!user.nome) return setStatus( {type: "error", mensagem: "O campo Nome é obrigatório"})
    if(!user.cpf) return setStatus( {type: "error", mensagem: "O campo CPF é obrigatório"})
    if(!user.nascimento) return setStatus( {type: "error", mensagem: "O campo Data de Nascimento é obrigatório"})
    return true
  }

  const validatePesquisa = () => {
    if(!user.cpf) return setStatus( {type: "error", mensagem: "O campo CPF é obrigatório"})
    return true
  }

  const handlerUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({...user, [e.target.name]: e.target.value})
  }

  const cadastrarPaciente = async () => {
    if(!validateCadastro()) return
    const { data, status } = await newData('/users', user)
    console.log(data)
    if(status == 201) {
      setStatus({
        type: "success",
        mensagem: "Paciente cadastrado com sucesso!"
      });
      localStorage.setItem("user",data.paciente_id)
      setUser(DEFAULT_USER)
    }else{
      setStatus({
        type: "error",
        mensagem: "Paciente já cadastrado!"
      })
    }
  }

  const pesquisarPaciente = async () => {
    if(!validatePesquisa()) return

    const response = await requestData(`/users/${user.cpf}`)
    if(response.nome) {
      console.log(response)
      setStatus({
        type: "success",
        mensagem: "Paciente encontrato com sucesso!"
      });
      setUser(response)
      localStorage.setItem("user",JSON.stringify(user.cpf))
    }else{
      setStatus({
        type: "success",
        mensagem: "Nenhum paciente encontrado com esse cpf!"
      })
    }
  }
  return (
    <ContainerForm>
      <Field>
        <legend>
          <TitleForm>Cadastrar Paciente</TitleForm>
        </legend>
        {status.type === 'error' && <MensageForm>{status.mensagem}</MensageForm> }
        {status.type === 'success' && <MensageForm>{status.mensagem}</MensageForm> }
        <ContainerInput>
          <Label htmlFor="nome">Nome: </Label>
          <InputName 
            id="nome"
            name="nome"
            onChange={(e) => handlerUser(e)}
            value={user.nome}
          />
        </ContainerInput>
        <ContainerInput>
          <Label htmlFor="sobrenome">Sobrenome: </Label>
          <InputName 
            id="sobrenome" 
            name="sobrenome"
            onChange={(e) => handlerUser(e)}            
            value={user.sobrenome}
            />
        </ContainerInput>
        <ContainerInput>
          <Label htmlFor="cpf">CPF: </Label>
          <InputName 
            id="cpf" 
            name="cpf" 
            onChange={(e) => handlerUser(e)}
            value={user.cpf}
            />
        </ContainerInput>
        <ContainerInput>
          <Label htmlFor="nascimento">Data de Nascimento: </Label>
          <InputDate 
            id="nascimento" 
            name="nascimento" 
            onChange={(e) => handlerUser(e)}
            value={user.nascimento}
            />
        </ContainerInput>
        <ContainerButoons>
          <Button onClick={cadastrarPaciente} >Cadastrar</Button>
          <Button onClick={pesquisarPaciente }>Pesquisar</Button>
        </ContainerButoons>
      </Field>
    </ContainerForm>
  )
}
