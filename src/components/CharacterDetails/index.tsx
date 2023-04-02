import {
  CharacterContainer,
  Name,
  ContentContainer,
  Content,
  Bold,
  BackIcon,
  Header,
} from './CharacterDetails.styles'

export default function CharacterDetails() {
  return (
    <CharacterContainer>
      <Header>
        <BackIcon />
        <Name>Luck Skywalker</Name>
      </Header>
      <ContentContainer>
        <Content>
          <Bold>Age:</Bold>
          <span>119BBY</span>
        </Content>
        <Content>
          <Bold>Eye Color:</Bold>
          <span>blue</span>
        </Content>
        <Content>
          <Bold>Hair Color:</Bold>
          <span>blue</span>
        </Content>
      </ContentContainer>
    </CharacterContainer>
  )
}
