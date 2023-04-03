import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from './infrastructure/theme'
import { BrowserRouter as Router } from 'react-router-dom'
import CharactersProvider from './services/Characters/Characters.context'
import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CharactersProvider>
        <Router>
          <App />
        </Router>
      </CharactersProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
