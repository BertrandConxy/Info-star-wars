import { iCharacter } from '../../typeDefs/character'

export const fetchCharacter = async (id: string): Promise<iCharacter> => {
  const response = await fetch(`https://swapi.dev/api/people/${id}`)
  const data = await response.json()
  return data
}
