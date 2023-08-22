import styled from 'styled-components'

export const CardContainer = styled.div`
  background-color: ${({ theme }) => theme['gray-200']};
  text-align: center;

  padding: 0 2.4rem 2rem;
  border-radius: 6px 36px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > div {
    > img {
      margin: 0 auto;
      position: relative;
      top: -2rem;
    }

    > ul {
      list-style: none;
      margin: 0 0 2rem;

      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 0.4rem;

      > li {
        background-color: ${({ theme }) => theme['yellow-100']};
        color: ${({ theme }) => theme['yellow-900']};
        font-size: 1rem;
        font-weight: 700;
        text-transform: uppercase;

        padding: 0.4rem 0.8rem;
        border-radius: 10rem;
      }
    }

    > h3 {
      font-family: 'Baloo 2', cursive;
      font-size: 2rem;
      font-weight: 700;
    }

    > p {
      color: ${({ theme }) => theme['gray-600']};
      font-size: 1.4rem;
      line-height: 1.6rem;

      margin: 0.8rem 0 3.3rem;
    }
  }

  > footer {
    display: flex;
    align-items: center;
    justify-content: space-between;

    > div {
      display: flex;
      align-items: center;
      gap: 0.8rem;
    }
  }
`

interface AddCardProps {
  inCart: boolean
}

export const AddCard = styled.button<AddCardProps>`
  background-color: ${({ theme, inCart }) =>
    inCart ? theme['green-500'] : theme['purple-900']};
  color: ${({ theme }) => theme['gray-200']};
  display: grid;
  place-items: center;

  width: 3.8rem;
  height: 3.8rem;
  padding: 0.8rem;
  border-radius: 0.6rem;

  border: none;
  cursor: ${({ inCart }) => (inCart ? 'not-allowed' : 'pointer')};

  &:hover {
    background-color: ${({ theme, inCart }) => !inCart && theme['purple-500']};
  }

  > svg {
    width: 2.2rem;
    height: 2.2rem;
  }
`

export const Price = styled.span`
  font-size: 1.4rem;
  > strong {
    font-family: 'Baloo 2', cursive;
    font-size: 2.4rem;
    font-weight: 900;
  }
`
