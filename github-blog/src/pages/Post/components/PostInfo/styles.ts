import { styled } from 'styled-components'

export const PostInfoContainer = styled.div`
  background-color: ${({ theme }) => theme['gray-700']};

  margin-top: -88px;
  padding: 3.2rem;
  border-radius: 10px;

  > header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  > h1 {
    margin: 2rem 0 0.8rem;
  }

  > ul {
    list-style: none;

    display: flex;
    flex-wrap: wrap;
    column-gap: 3.2rem;
    row-gap: 0.8rem;

    li {
      display: flex;
      align-items: center;
      gap: 0.8rem;
      color: ${({ theme }) => theme['gray-300']};

      svg {
        color: ${({ theme }) => theme['gray-400']};
        width: 1.8rem;
        height: 1.8rem;
      }
    }
  }

  @media (max-width: 450px) {
    > ul {
      flex-direction: column;
    }
  }
`
