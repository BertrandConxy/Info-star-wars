import { iCharacter } from '../../typeDefs/character'
import {
  CharacterCardStyled,
  Title,
  Content,
  Span,
} from './CharacterCard.styles'
export default function CharacterCard({
  key,
  name,
  birthYear,
  hairColor,
  gender,
  eyeColor,
}: iCharacter) {
  return (
    <CharacterCardStyled>
      <Title>{name}</Title>
      <Content>
        Age: <Span>{birthYear}</Span>
      </Content>
      <Content>
        Eye Color: <Span>{eyeColor}</Span>
      </Content>
      <Content>
        Hair Color: <Span>{hairColor}</Span>
      </Content>
      <Content>
        Gender: <Span>{gender}</Span>
      </Content>
    </CharacterCardStyled>
  )
}
