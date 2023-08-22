import { Outlet } from 'react-router-dom'
import { DefaultLayoutContainer } from './styles'
import { Header } from '../../components/Header'

export function DefaultLayout() {
  return (
    <DefaultLayoutContainer>
      <Header />
      <div>
        <Outlet />
      </div>
    </DefaultLayoutContainer>
  )
}
