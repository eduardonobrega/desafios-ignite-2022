import { styled } from 'styled-components'

export const PostContentContainer = styled.main`
  padding: 4rem 3.2rem 0;
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${({ theme }) => theme.white};
    font-weight: 700;
    line-height: 130%;
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 2rem;
  }

  h2 {
    font-size: 1.6rem;
  }
  h3 {
    font-size: 1.8rem;
  }

  h4 {
    opacity: 0.8;
  }
  h5 {
    opacity: 0.6;
  }
  h6 {
    opacity: 0.4;
  }

  a {
    color: ${({ theme }) => theme.blue};
  }

  pre {
    background-color: ${({ theme }) => theme['gray-600']};
    border-radius: 2px;
    padding: 1.6rem;

    > div {
      background: none !important;
      padding: 0;
      margin: 0;
    }
  }
`
