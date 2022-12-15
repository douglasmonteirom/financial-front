import { Link } from 'react-router-dom'
import { Container } from '../../globalStyles'
import { Body } from './styles'

export default function Header() {
  return (
    <Container>
      <Body>
        <Link to='/'>Home</Link>
        <Link to='/cadastro'>Cadastro</Link>
      </Body>
    </Container>
  )
}
