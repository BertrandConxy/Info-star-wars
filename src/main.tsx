import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import CharactersProvider from './services/Characters/Characters.context'
import { ThemeProvider } from 'styled-components'
import { theme } from './infrastructure/theme'
import './assets/index.css'
import App from './App'

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
