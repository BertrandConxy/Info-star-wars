import { Routes, Route } from 'react-router-dom'
import Layout from './pages/layout'
import Home from './pages/home'
import Characters from './pages/characters'
import Character from './pages/character'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/characters/:characterName" element={<Character />} />
      </Routes>
    </Layout>
  )
}
