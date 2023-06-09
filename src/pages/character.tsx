import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { iCharacter } from '../typeDefs/character'
import { fetchCharacter } from '../services/Character/Character.service'
import CharacterDetails from '../components/CharacterDetails'
import { TextContainer } from '../components/Common/Characters'

export default function Character() {
  const { characterID } = useParams()
  const [character, setCharacter] = useState<iCharacter>()
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>('')

  useEffect(() => {
    let arr: Promise<Response>[] = []
    setLoading(true)
    fetchCharacter(characterID!)
      .then((response) => {
        const Person: iCharacter = {
          id: parseInt(response.url.split('/').slice(-2, -1)[0]),
          name: response.name,
          birth_year: response.birth_year,
          eye_color: response.eye_color,
          gender: response.gender,
          height: response.height,
          hair_color: response.hair_color,
          mass: response.mass,
          films: [],
        }
        setCharacter(response)
        response.films.map((film: string) => {
          arr.push(
            fetch(film)
              .then((response) => response.json())
              .then((response) => response.title),
          )
        })
        Promise.all(arr)
          .then((response) => {
            const stringify = response.toString().split(',')
            setCharacter({
              ...Person,
              films: stringify,
            })
            setLoading(false)
          })
          .catch((err) => {
            setLoading(false)
            setError(err)
          })
      })
      .catch((err) => {
        setLoading(false)
        setError(err)
      })
  }, [])

  if (loading) {
    return <TextContainer>Loading...</TextContainer>
  }
  if (error) {
    return <TextContainer>{error}</TextContainer>
  }
  return <CharacterDetails character={character!} />
}
