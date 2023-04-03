import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Layout from './pages/layout'
import Home from './pages/home'
import Characters from './pages/characters'
import Character from './pages/character'
import { iCharacter } from './typeDefs/character'
import { useCharacters } from './services/Characters/Characters.context'

export default function App() {
  const { characters, loading, error } = useCharacters()
  const [filtered, setFiltered] = useState<iCharacter[]>(characters)
  const navigate = useNavigate()
  const location = useLocation()

  const handleSearched = (search: string) => {
    if (search === null || search === undefined || search.length === 0) {
      setFiltered(characters)
    } else {
      const filteredArray = characters?.filter(({ name }) =>
        name.toLowerCase().includes(search.toLowerCase()),
      )
      setFiltered(filteredArray)
    }
    if (location.pathname !== '/characters') {
      navigate('/characters')
      return
    }
  }

  return (
    <Layout handleSearched={handleSearched}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/characters"
          element={
            <Characters filtered={filtered} loading={loading} error={error} />
          }
        />
        <Route path="/characters/:characterID" element={<Character />} />
      </Routes>
    </Layout>
  )
}
