import styled from 'styled-components'

export const SearchContainer = styled.div`
  margin-top: 7.2rem;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      color: ${({ theme }) => theme['gray-100']};

      font-size: 1.8rem;
      font-weight: 700;
    }

    span {
      font-size: 1.4rem;
      color: ${({ theme }) => theme['gray-300']};
    }
  }

  input {
    margin-top: 1.2rem;
    background-color: ${({ theme }) => theme['gray-900']};

    width: 100%;
    padding: 1.2rem 1.6rem;
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme['gray-500']};
    outline: none;

    &::placeholder {
      color: ${({ theme }) => theme['gray-400']};
    }
    &:not(:disabled):focus {
      border-color: ${({ theme }) => theme.blue};
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }
`
