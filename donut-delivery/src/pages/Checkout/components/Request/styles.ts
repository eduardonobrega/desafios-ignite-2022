import styled from 'styled-components'

export const OrderContainer = styled.div`
  background-color: ${({ theme }) => theme['gray-200']};
  display: flex;
  justify-content: space-between;

  padding: 0.8rem 0.4rem;

  > div {
    display: flex;
    align-items: flex-start;
    gap: 2rem;

    > img {
      width: 6.4rem;
      height: 6.4rem;
    }

    > div {
      > h2 {
        color: ${({ theme }) => theme['gray-800']};
        margin-bottom: 0.8rem;
      }

      > div {
        display: flex;
        gap: 0.8rem;
      }
    }
  }

  > strong {
    font-weight: 700;
    flex-shrink: 0;
  }

  @media (max-width: 349px) {
    > div {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  }
`

export const RemoveButton = styled.button`
  background-color: ${({ theme }) => theme['gray-400']};

  font-size: 1.2rem;
  text-transform: uppercase;

  padding: 0 0.8rem;
  height: 3.2rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  display: flex;
  align-items: center;
  gap: 0.4rem;
  flex-shrink: 0;

  &:hover {
    background-color: ${({ theme }) => theme['gray-500']};
    color: ${({ theme }) => theme['gray-800']};
  }

  > svg {
    color: ${({ theme }) => theme['purple-500']};
    width: 1.6rem;
    height: 1.6rem;
  }
`
