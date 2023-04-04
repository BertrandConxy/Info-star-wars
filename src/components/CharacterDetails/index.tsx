import React from 'react'

import {
  CharacterContainer,
  Name,
  ContentContainer,
  Content,
  Bold,
  BackIcon,
  Header,
} from './CharacterDetails.styles'

import { iCharacter } from '../../typeDefs/character'

import { useNavigate } from 'react-router-dom'

export default function CharacterDetails({
  character,
}: {
  character: iCharacter
}) {
  const {
    name,
    birth_year,
    gender,
    hair_color,
    eye_color,
    height,
    mass,
    films,
  } = character

  const listObject = {
    'Birth year': birth_year,
    gender: gender,
    'Eye color': eye_color,
    'Hair color': hair_color,
    Height: height,
    Mass: mass,
  }
  const navigate = useNavigate()
  const handleBack = () => {
    navigate(-1)
  }
  return (
    <CharacterContainer>
      <Header>
        <BackIcon onClick={handleBack} />
        <Name>{name}</Name>
      </Header>
      <ContentContainer>
        {Object.entries(listObject).map(([key, value]) => (
          <Content key={key}>
            <Bold>{key}:</Bold>
            <span>{value}</span>
          </Content>
        ))}
        <Content>
          <Bold>Films Featured:</Bold>
          <div>
            {films.map((film, i) => (
              <p key={i}>{film}</p>
            ))}
          </div>
        </Content>
      </ContentContainer>
    </CharacterContainer>
  )
}
