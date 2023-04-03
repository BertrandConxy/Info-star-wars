import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import { useState } from 'react'
import Layout from './pages/layout'
import Home from './pages/home'
import Characters from './pages/characters'
import Character from './pages/character'
import { charactersArray } from './data/characters'
import { iCharacter } from './typeDefs/character'

export default function App() {
  const [filtered, setFiltered] = useState<iCharacter[]>(charactersArray)
  const navigate = useNavigate()
  const location = useLocation()

  const handleSearched = (search: string) => {
    if (search === null || search === undefined || search.length === 0) {
      setFiltered(charactersArray)
    } else {
      const filteredArray = charactersArray.filter(({ name }) =>
        name.toLowerCase().includes(search.toLowerCase()),
      )
      setFiltered(filteredArray)
    }
    // Check if the current route is not /characters
    if (location.pathname !== '/characters') {
      // Navigate to /characters
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
          element={<Characters characters={filtered} />}
        />
        <Route path="/characters/:characterName" element={<Character />} />
      </Routes>
    </Layout>
  )
}
