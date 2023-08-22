import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { RequestsProvider } from './hooks/requests'
export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <RequestsProvider>
          <Router />
        </RequestsProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
