import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 62.5%;
  }
  
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  
  * {
    margin: 0;
    padding: 0;
    font: inherit;
  }
  
  img,
  picture,
  svg,
  video {
    display: block;
    max-width: 100%;
  }
  
  body,
  input,
  button,
  textarea {
    color: ${({ theme }) => theme['gray-700']};
    font-size: 1.6rem;
    font-weight: 400;
  
    /* font-family: 'Baloo 2', cursive; */ 
    font-family: 'Roboto', sans-serif; 
    -webkit-font-smoothing: antialiased; 
    -moz-osx-font-smoothing: grayscale;
  }
  
  body {
    min-height: 100vh;
    background-color: ${({ theme }) => theme['gray-100']};
  }

  @media (max-width: 768px) {
  :root {
    font-size: 50%;
  }
}
`
