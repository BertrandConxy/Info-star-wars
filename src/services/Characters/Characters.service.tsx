import { iCharacter } from '../../typeDefs/character'

export const fetchCharacters = async (): Promise<iCharacter[]> => {
  const response = await fetch('https://swapi.dev/api/people')
  const data = await response.json()
  return data.results
}
