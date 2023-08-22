import styled from 'styled-components'

export const EmptyCartContainer = styled.div`
  background-color: ${({ theme }) => theme['purple-100']};
  color: ${({ theme }) => theme['purple-900']};
  font-family: 'Baloo 2', cursive;
  font-size: 2rem;

  width: 100%;
  height: 10vh;
  border-radius: 8px;

  display: grid;
  place-items: center;
`
