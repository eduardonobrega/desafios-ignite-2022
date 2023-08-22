import { ProfileContainer, ProfileDetails } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBuilding,
  faUserGroup,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { ExternalLink } from '../../../../components/ExternalLink'
import { useEffect, useState } from 'react'
import axios from 'axios'

interface User {
  username: string
  name: string
  avatar: string
  company: string
  followers: number
  profileURL: string
  bio: string
  location: string
}

export function Profile() {
  const [user, setUser] = useState({} as User)

  useEffect(() => {
    async function fetchUser(username: string) {
      const url = `https://api.github.com/users/${username}`
      const response = await axios.get(url)
      const {
        login,
        name,
        company,
        followers,
        bio,
        location,
        avatar_url: avatar,
        html_url: profileURL,
      } = response.data

      setUser({
        username: login,
        name,
        avatar,
        company,
        followers,
        profileURL,
        bio,
        location,
      })
    }

    fetchUser('eduardonobrega')
  }, [])

  return (
    <ProfileContainer>
      <img
        src={user.avatar}
        alt={`Foto do perfil do(a) ${user.name}`}
        title={user.name}
      />
      <ProfileDetails>
        <header>
          <h1>{user.name}</h1>{' '}
          <ExternalLink
            href={user.profileURL}
            text="github"
            title={`Ver GitHub do(a) ${user.name}`}
          />
        </header>
        <p>{user.bio}</p>

        <ul>
          <li title="Nome do usuário">
            <FontAwesomeIcon icon={faGithub} />
            <span>{user.username}</span>
          </li>
          {user.company ? (
            <li title="Local de trabalho">
              <FontAwesomeIcon icon={faBuilding} />
              <span>{user.company}</span>
            </li>
          ) : (
            <li title="Cidade">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>{user.location}</span>
            </li>
          )}

          <li title="Número de seguidores">
            <FontAwesomeIcon icon={faUserGroup} />
            <span>{`${user.followers} seguidores`}</span>
          </li>
        </ul>
      </ProfileDetails>
    </ProfileContainer>
  )
}
