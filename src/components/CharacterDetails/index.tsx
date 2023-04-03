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
  name,
  eye_color,
  hair_color,
  gender,
  birth_year,
  films,
  height,
  mass,
}: iCharacter) {
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
        <Content>
          <Bold>Birth Year:</Bold>
          <span>{birth_year}</span>
        </Content>
        <Content>
          <Bold>Gender:</Bold>
          <span>{gender}</span>
        </Content>
        <Content>
          <Bold>Eye Color:</Bold>
          <span>{eye_color}</span>
        </Content>
        <Content>
          <Bold>Hair Color:</Bold>
          <span>{hair_color}</span>
        </Content>
        <Content>
          <Bold>Height:</Bold>
          <span>{height}</span>
        </Content>
        <Content>
          <Bold>Mass:</Bold>
          <span>{mass}</span>
        </Content>
        <Content>
          <Bold>Films Featured:</Bold>
          <div>
            {films.map((film) => (
              <p>{film}</p>
            ))}
          </div>
        </Content>
      </ContentContainer>
    </CharacterContainer>
  )
}
