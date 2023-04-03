import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CharacterDetails from '../components/CharacterDetails'
import { iCharacter } from '../typeDefs/character'

export default function Character() {
  const { characterID } = useParams()
  console.log(characterID)
  const [character, setCharacter] = useState<iCharacter | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  useEffect(() => {
    let arr: Promise<Response>[] = []
    setLoading(true)
    fetch(`https://swapi.dev/api/people/${characterID}/`)
      .then((response) => response.json())
      .then((response) => {
        console.log(response)
        const Person: iCharacter = {
          id: 1,
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
        Promise.all(arr).then((response) => {
          const stringify = response.toString().split(',')
          setCharacter({
            ...Person,
            films: stringify,
          })
          setLoading(false)
        })
      })
  }, [])

  useEffect(() => {}, [])
  return loading === true ? (
    <h3>loading</h3>
  ) : (
    <CharacterDetails
      id={character!.id}
      name={character!.name}
      birth_year={character!.birth_year}
      gender={character!.gender}
      hair_color={character!.hair_color}
      eye_color={character!.eye_color}
      height={character!.height}
      mass={character!.mass}
      films={character!.films}
    />
  )
}
