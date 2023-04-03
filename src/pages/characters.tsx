import { useState } from 'react'
import { iCharacter } from '../typeDefs/character'
import CharacterCard from '../components/CharacterCard'
import GridLayout from '../components/Common/GridLayout'
import ButtonPag from '../components/Common/ButtonPag'
import {
  CharactersContainer,
  PaginationContainer,
  TextContainer,
} from '../components/Common/Characters'
import { useCharacters } from '../services/Characters/Characters.context'
import { charactersArray } from '../data/characters'

function Characters({
  filtered,
  loading,
  error,
}: {
  filtered: iCharacter[]
  loading: boolean
  error: string
}) {
  // const { characters } = useCharacters()
  const characters = charactersArray
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

  const renderPagination = () => {
    const pages = []
    const prevPage = currentPage - 1
    const nextPage = currentPage + 1
    if (prevPage > 0) {
      pages.push(
        <ButtonPag
          key="prev"
          handleClick={() => handleClick(prevPage)}
          text="Prev"
        />,
      )
    }

    for (let i = 1; i <= totalPages; i++) {
      const active = i === currentPage
      pages.push(
        <ButtonPag
          key={i}
          handleClick={() => handleClick(i)}
          text={i}
          active={active}
        />,
      )
    }

    if (nextPage <= totalPages) {
      pages.push(
        <ButtonPag
          key="next"
          handleClick={() => handleClick(nextPage)}
          text="Next"
        />,
      )
    }

    return pages
  }

  return (
    <CharactersContainer>
      {renderCharacters()}
      <PaginationContainer>{renderPagination()}</PaginationContainer>
    </CharactersContainer>
  )
}

export default Characters
