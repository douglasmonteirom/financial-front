import { useContext, useState } from "react";
import Header from "../../components/Header";
import List from "../../components/List";
import AppContext from "../../context/appContext";
import { Container, Button, ContainerInput, ContainerButoons, Label, InputDate, Field, TitleForm, ContainerForm, MensageForm } from "../../globalStyles";
import { BodyPage, HeaderList, Total, MensageDefault } from "./styles";

interface Istatus {
  type: string,
  mensagem: string
}
    
function Dashboar() {
  const { getParcelas, datas } = useContext(AppContext);

  const [dateInicio, setDateInicio] = useState<string>("")
  const [dateFinal, setDateFinal] = useState<string>("")
  const [status, setStatus] = useState<Istatus>({    
    type: "",
    mensagem: ""
  })

  const total = () => datas?.reduce((prev, curr) => prev + Number(curr.valor), 0)

  const validate = () => {
    if(!dateInicio) return setStatus( {type: "error", mensagem: "O campo Data Inicío é obrigatório"})
    if(!dateFinal) return setStatus( {type: "error", mensagem: "O campo Data Final é obrigatório"})
    return true
  }

  const OnClickParcelas = () => {

    if(!validate()) return

    getParcelas(dateInicio, dateFinal)
    setDateInicio("")
    setDateFinal("")
    setStatus({
    type: "",
    mensagem: ""})
  }

  return (
    <Container>
      <Header />
      <BodyPage>
        <ContainerForm>
          <Field>
            <legend>
              <TitleForm>Período de Busca</TitleForm>
            </legend>
            {status.type === 'error' && <MensageForm>{status.mensagem}</MensageForm> }
            <ContainerInput>
              <Label htmlFor="date-init">Data Início:</Label>
              <InputDate id="date-init" value={dateInicio} onChange={(e) => setDateInicio(e.target.value)}/>
            </ContainerInput>
            <ContainerInput>
              <Label htmlFor="date-end">Data Final:</Label>
              <InputDate id="date-end" value={dateFinal} onChange={(e) => setDateFinal(e.target.value)}/>
            </ContainerInput>
            <ContainerButoons>
              <Button onClick={OnClickParcelas}>Pesquisar</Button>
            </ContainerButoons>
          </Field>
        </ContainerForm>
        <HeaderList>
          <p>Paciente</p>
          <p>Tratamento</p>
          <p>Data de vencimento</p>
          <p>Valor</p>
        </HeaderList>
        { !datas && <MensageDefault>Selecione o período desejado</MensageDefault> }
        { (datas && datas.length > 0) && <List/> }
        { (datas?.length == 0) && <MensageDefault>Nenhuma Parcela neste periodo</MensageDefault> }
        <Total>Total R$: { datas ? total() : 0 } </Total>
      </BodyPage>
    </Container>
  )
}

export default Dashboar;
