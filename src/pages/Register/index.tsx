import Formpaciente from "../../components/FormPaciente";
import FormTratamento from "../../components/FormTratamento";
import Header from "../../components/Header"
import { Container, Body } from "../../globalStyles";

function Register() {
  return (
    <Container>
      <Header/>
      <Body>
        <Formpaciente />
        <FormTratamento />
      </Body>
    </Container>
  )
}

export default Register;