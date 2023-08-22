import styled from 'styled-components'
import InputMask from 'react-input-mask'

export const InputContainer = styled(InputMask)`
  color: ${({ theme }) => theme['gray-700']};
  background-color: ${({ theme }) => theme['gray-300']};
  font-size: 1.4rem;
  line-height: 1.82rem;
  padding: 1.2rem;
  height: 4.2rem;
  width: 100%;

  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme['gray-400']};

  &::placeholder {
    color: ${({ theme }) => theme['gray-600']};
  }
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme['yellow-900']};
  }
`
