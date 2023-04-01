import { iCharacter } from "../../typeDefs/character"
export default function CharacterCard({key,name, birthYear, hairColor, gender, eyeColor}:iCharacter) {
  return (
    <div>
    <h2>{name}</h2>
    <p>Age: {birthYear}</p>
    <p>Email: {eyeColor}</p>
    <p>Email: {gender}</p>
    <p>Email: {hairColor}</p>
  </div>
  )
}
