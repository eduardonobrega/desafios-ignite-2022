import styled from 'styled-components'

export const BlogContainer = styled.div`
  > main {
    margin-top: 4.8rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: clamp(1rem, -16.8084rem + 23.1579vw, 3.2rem);
  }

  @media (max-width: 600px) {
    > main {
      display: grid;
      grid-template-columns: 1fr;
      row-gap: 3rem;
    }
  }
`
