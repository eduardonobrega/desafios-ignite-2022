import { HeaderContainer, Location, ShoppingCartWrapping } from './styles'
import logo from '../../assets/logo.png'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { NavLink } from 'react-router-dom'
import { useRequests } from '../../hooks/requests'
import { useEffect, useState } from 'react'

interface Position {
  city: string
  state: string
}

function getLocation(): Promise<Position> {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords
        const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`

        const response = await fetch(url)
          .then((response) => response.json())
          .then((data) => data.address)

        resolve({
          city: response.city,
          state: response['ISO3166-2-lvl4'].slice(-2),
        })
      },
      (error) => reject(error),
    )
  })
}

export function Header() {
  const { requests } = useRequests()
  const [city, setCity] = useState('Brasil')

  useEffect(() => {
    getLocation()
      .then((position) => {
        setCity(`${position.city}, ${position.state}`)
      })
      .catch((error) => console.error(error))
  }, [])

  return (
    <HeaderContainer>
      <NavLink to="/" title="Ir para Home">
        <img src={logo} alt="" />
      </NavLink>
      <div>
        <Location title="Sua Cidade">
          <MapPin weight="fill" />
          {city || 'Brasil'}
        </Location>
        <nav>
          <ShoppingCartWrapping to="/checkout" title="Seus pedidos">
            <ShoppingCart weight="fill" />
            <span>{requests.length}</span>
          </ShoppingCartWrapping>
        </nav>
      </div>
    </HeaderContainer>
  )
}
