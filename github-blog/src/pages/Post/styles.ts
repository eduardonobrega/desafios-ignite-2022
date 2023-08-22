import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const PostContainer = styled.div``

export const BackButton = styled(Link)`
  color: ${({ theme }) => theme.blue};
  font-size: 1.2rem;
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: none;

  border-bottom: 1px solid transparent;

  display: flex;
  align-items: center;
  gap: 0.8rem;

  &:hover {
    border-color: ${({ theme }) => theme.blue};
  }

  svg {
    width: 1.2rem;
    height: 1.2rem;
  }
`
