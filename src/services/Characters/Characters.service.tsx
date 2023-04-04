import { iCharacter } from '../../typeDefs/character'

export const fetchCharacters = async (): Promise<iCharacter[]> => {
  const urls = [
    'https://swapi.dev/api/people/?page=1',
    'https://swapi.dev/api/people/?page=2',
    'https://swapi.dev/api/people/?page=3',
  ]

  const requests = urls.map((url) => fetch(url))
  const responses = await Promise.all(requests)
  const data = await Promise.all(responses.map((r) => r.json()))
  const results = data.reduce((acc, curr) => acc.concat(curr.results), [])
  const modifiedResults = results.map((result: iCharacter) => ({
    ...result,
    id: parseInt(result.url.split('/').slice(-2, -1)[0]),
  }))

  return modifiedResults
}
