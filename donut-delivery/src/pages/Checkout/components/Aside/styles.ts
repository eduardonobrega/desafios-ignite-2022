import styled from 'styled-components'

export const AsideContainer = styled.aside`
  max-width: 44.8rem;
  flex-basis: 44.8rem;
  > div {
    background-color: ${({ theme }) => theme['gray-200']};

    padding: 4rem;
    border-radius: 6px 44px;
    > ul {
      list-style: none;

      > li {
        border-bottom: 1px solid ${({ theme }) => theme['gray-400']};
        padding-bottom: 2.4rem;
        margin-bottom: 2.4rem;
      }
    }

    > p {
      display: flex;
      justify-content: space-between;
      align-items: center;

      > span:first-child {
        font-size: 1.4rem;
      }
      > strong {
        font-size: 2rem;
        font-weight: 700;
      }
    }

    > p + p {
      margin-top: 1.2rem;
    }
  }

  @media (max-width: 900px) {
    max-width: none;
    > div {
      border-radius: 6px;
    }
  }
`
export const ConfirmButton = styled.button`
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme['yellow-500']};
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 160%;
  text-transform: uppercase;

  width: 100%;
  height: 4.6rem;
  margin-top: 2.4rem;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  transition: background-color 200ms;

  &:hover {
    background-color: ${({ theme }) => theme['yellow-900']};
  }
`
