import Layout from './pages/layout'
import { ThemeProvider } from 'styled-components'
import { theme } from './infrastructure/theme'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <h3>Hello</h3>
      </Layout>
    </ThemeProvider>
  )
}
