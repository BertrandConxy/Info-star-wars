import { useEffect } from 'react'
import CharacterDetails from '../components/CharacterDetails'

export default function Character() {
  let person = null
  // useEffect(() => {
  //   let arr: Promise<Response>[] = []
  //   fetch('https://swapi.dev/api/people/2/')
  //     .then((response) => response.json())
  //     .then((response) => {
  //       person = response
  //       console.log(person)
  //       person.films.map((film: string) => {
  //         arr.push(
  //           fetch(film)
  //             .then((response) => response.json())
  //             .then((response) => response.title),
  //         )
  //       })
  //       console.log(arr)
  //       Promise.all(arr).then((response) => console.log(response))
  //     })
  // }, [])
  return <CharacterDetails />
}
