import { useState } from 'react'
import { iCharacter } from '../typeDefs/character'
import CharacterCard from '../components/CharacterCard'
import GridLayout from '../components/Common/GridLayout'
import {
  CharactersContainer,
  PaginationContainer,
  TextContainer,
} from '../components/Common/Characters'
import Pagination from '../components/Pagination'
import { useCharacters } from '../services/Characters/Characters.context'
// import { charactersArray } from '../data/MockCharacters'

interface iCharacters {
  filtered: iCharacter[]
  loading: boolean
  error: string
}

function Characters({ filtered, loading, error }: iCharacters) {
  const { characters } = useCharacters()
  const [currentPage, setCurrentPage] = useState(1)
  const charactersPerPage = 10
  const totalPages = Math.ceil(characters.length / charactersPerPage)

  const handleClick = (page: number) => {
    setCurrentPage(page)
  }

  const renderCharacters = () => {
    const start = (currentPage - 1) * charactersPerPage
    const end = start + charactersPerPage
    const currentCharacters = characters.slice(start, end)
    const currentCharactersFiltered = filtered.slice(start, end)
    if (loading) {
      return <TextContainer>Loading...</TextContainer>
    }
    if (error) {
      return <TextContainer>{error}</TextContainer>
    }
    return (
      <GridLayout>
        {filtered.length !== 0
          ? currentCharactersFiltered.map(
              ({ id, birth_year, eye_color, gender, hair_color, name }) => (
                <CharacterCard
                  key={id}
                  id={id}
                  name={name}
                  hairColor={hair_color}
                  eyeColor={eye_color}
                  birthYear={birth_year}
                  gender={gender}
                />
              ),
            )
          : currentCharacters.map(
              ({ id, birth_year, eye_color, gender, hair_color, name }) => (
                <CharacterCard
                  key={id}
                  id={id}
                  name={name}
                  hairColor={hair_color}
                  eyeColor={eye_color}
                  birthYear={birth_year}
                  gender={gender}
                />
              ),
            )}
      </GridLayout>
    )
  }

  return (
    <CharactersContainer>
      {renderCharacters()}
      <PaginationContainer>
        {Pagination({
          currentPage: currentPage,
          handleClick: handleClick,
          totalPages: totalPages,
        })}
      </PaginationContainer>
    </CharactersContainer>
  )
}

export default Characters
