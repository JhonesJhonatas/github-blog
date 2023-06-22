import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/DefaultTheme'
import { GlobalStyle } from './styles/global'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { UserProvider } from './contexts/userContext'
import { RepoIssuesProvider } from './contexts/repoIssues'

export function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>

        <GlobalStyle />

        <UserProvider>
          <RepoIssuesProvider>

            <BrowserRouter>

              <Router />

            </BrowserRouter>

          </RepoIssuesProvider>
        </UserProvider>

      </ThemeProvider>

    </>
  )
}
