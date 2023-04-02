import styled from 'styled-components'
import { useEffect } from 'react'

const CharacterContainer = styled.div`
  border: 1px solid white;
  margin: 10px 20px;
`

export default function Character() {
  let person = null
  useEffect(() => {
    let arr: Promise<Response>[] = []
    fetch('https://swapi.dev/api/people/2/')
      .then((response) => response.json())
      .then((response) => {
        person = response
        console.log(person)
        person.films.map((film: string) => {
          arr.push(
            fetch(film)
              .then((response) => response.json())
              .then((response) => response.title),
          )
        })
        console.log(arr)
        Promise.all(arr).then((response) => console.log(response))
      })
  }, [])
  return (
    <CharacterContainer>
      <h2>Character page</h2>
      <h3>Luck Skywalker</h3>
      <p>Age: 122BBY</p>
      <p>Eye Color: blue</p>
      <p>Hair Color: blue</p>
    </CharacterContainer>
  )
}
