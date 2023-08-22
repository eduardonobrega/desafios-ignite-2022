import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
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
  color: ${({ theme }) => theme['gray-200']};
  font: 400 1.6rem 'Nunito', sans-serif;

  -webkit-font-smoothing: antialiased; 
  -moz-osx-font-smoothing: grayscale;
}

body {
  min-height: 100vh;
  background-color: ${({ theme }) => theme['gray-800']};
}

h1 {
  color: ${({ theme }) => theme.white};
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 130%;
}

@media (max-width: 768px) {
  :root {
    font-size: 50%;
  }
}
`
