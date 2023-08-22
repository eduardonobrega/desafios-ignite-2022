import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  margin-top: 4rem;

  display: flex;
  justify-content: space-between;
  gap: 1.2rem;
  h1 {
    color: ${({ theme }) => theme['gray-800']};

    font-family: 'Baloo 2', cursive;
    font-size: 1.8rem;
    font-weight: 700;

    margin-bottom: 1.5rem;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`
