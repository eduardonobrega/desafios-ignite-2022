import styled from 'styled-components'

export const CounterContainer = styled.div`
  color: ${({ theme }) => theme['gray-900']};
  background-color: ${({ theme }) => theme['gray-400']};
  line-height: 1.9rem;

  width: 7.2rem;
  height: 3.2rem;
  padding: 0.8rem;
  border-radius: 0.6rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;

  > button {
    color: ${({ theme }) => theme['purple-500']};
    background-color: transparent;
    font-weight: 700;
    border: none;
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme['purple-900']};
    }
  }
`
