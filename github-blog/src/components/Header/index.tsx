import { HeaderContainer } from './styles'
import logo from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img
        src={logo}
        alt="Logo do Github blog, simbolizada por um ícone de um terminal e logo o baixo o nome GITHUB BLOG em caixa alta e na cor Azul"
      />
    </HeaderContainer>
  )
}
