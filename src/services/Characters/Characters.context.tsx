import { createContext, useContext, useEffect, useState } from 'react'
import { iCharacter } from '../../typeDefs/character'
import { iChildrenNode } from '../../typeDefs/childrenNode'
import { fetchCharacters } from './Characters.service'

interface iCharactersContext {
  characters: iCharacter[]
  loading: boolean
  error: string
}

const CharactersContext = createContext({} as iCharactersContext)

export function useCharacters() {
  return useContext(CharactersContext)
}

export default function CharactersProvider({ children }: iChildrenNode) {
  const [characters, setCharacters] = useState<iCharacter[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const retrieveCharacters = () => {
    setLoading(true)
    fetchCharacters()
      .then((response) => {
        setLoading(false)
        setCharacters(response)
      })
      .catch((err) => {
        setLoading(false)
        setError(err)
      })
  }
  useEffect(() => {
    retrieveCharacters()
  }, [])
  return (
    <CharactersContext.Provider value={{ characters, loading, error }}>
      {children}
    </CharactersContext.Provider>
  )
}
