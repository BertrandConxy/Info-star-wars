import React from 'react'

import {
  CharacterCardStyled,
  Title,
  Content,
  Span,
  LinkContainer,
} from './CharacterCard.styles'
import { iProps } from '../../typeDefs/characterCardProps'

export default function CharacterCard(props: iProps) {
  const { id, name, birthYear, hairColor, gender, eyeColor } = props
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
