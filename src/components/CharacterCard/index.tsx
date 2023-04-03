import {
  CharacterCardStyled,
  Title,
  Content,
  Span,
  LinkContainer,
} from './CharacterCard.styles'

interface iProps {
  id: number
  name: string
  birthYear: string
  gender: string
  eyeColor: string
  hairColor: string
}
export default function CharacterCard({
  id,
  name,
  birthYear,
  hairColor,
  gender,
  eyeColor,
}: iProps) {
  console.log(id)
  console.log(typeof id)
  return (
    <LinkContainer to={`/characters/${id}`}>
      <CharacterCardStyled>
        <Title>{name}</Title>
        <Content>
          Birth Year: <Span>{birthYear}</Span>
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
    </LinkContainer>
  )
}
