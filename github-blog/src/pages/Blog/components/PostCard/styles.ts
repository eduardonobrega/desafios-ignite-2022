import { styled } from 'styled-components'

export const PostCardContainer = styled.article`
  background-color: ${({ theme }) => theme['gray-600']};

  padding: 3.2rem;
  border-radius: 10px;
  border: 2px solid transparent;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    border-color: ${({ theme }) => theme['gray-400']};
    transition: border-color 0.2s;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 0.5rem;
    h3 {
      color: ${({ theme }) => theme.white};
      font-weight: 700;
      line-height: 160%;
    }

    time {
      flex-shrink: 0;
      color: ${({ theme }) => theme['gray-300']};
      font-size: 1.4rem;
    }
  }

  > div {
    color: ${({ theme }) => theme['gray-200']};
    margin-top: 2rem;
    line-height: 160%;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    line-clamp: 4;
    -webkit-box-orient: vertical;
  }

  @media (max-width: 600px) {
    padding: 3rem;
    header {
      > time {
        font-size: clamp(1.5rem, 1.3214rem + 0.4464vw, 1.75rem);
      }
    }
  }
`
