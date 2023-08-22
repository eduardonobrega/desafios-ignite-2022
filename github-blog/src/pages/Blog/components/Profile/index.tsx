import { ProfileContainer, ProfileDetails } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBuilding,
  faUserGroup,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { ExternalLink } from '../../../../components/ExternalLink'
import { useCallback, useEffect, useState } from 'react'
import { api } from '../../../../lib/axios'
import { Spinner } from '../../../../components/Spinner'

interface User {
  username: string
  name: string
  avatar: string
  company?: string
  followers: number
  profileURL: string
  bio: string
  location: string
}

const username = import.meta.env.VITE_GITHUB_USERNAME

export function Profile() {
  const [user, setUser] = useState({} as User)
  const [isLoading, setIsLoading] = useState(true)

  const fetchUser = useCallback(async () => {
    try {
      setIsLoading(true)
      const response = await api.get(`users/${username}`)
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
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchUser()
  }, [fetchUser])

  return (
    <ProfileContainer>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
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
        </>
      )}
    </ProfileContainer>
  )
}
