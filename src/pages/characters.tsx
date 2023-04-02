import { useState } from 'react'
import { iCharacter } from '../typeDefs/character'
import { charactersArray } from '../data/characters'
import CharacterCard from '../components/CharacterCard'
import GridLayout from '../components/Common/GridLayout'
import ButtonPag from '../components/Common/ButtonPag'
import {
  CharactersContainer,
  PaginationContainer,
} from '../components/Common/Characters'

function Characters({
  characters = charactersArray,
}: {
  characters: iCharacter[]
}) {
  const [currentPage, setCurrentPage] = useState(1)
  const charactersPerPage = 5
  const totalPages = Math.ceil(characters.length / charactersPerPage)

  const handleClick = (page: number) => {
    setCurrentPage(page)
  }

  const renderCharacters = () => {
    const start = (currentPage - 1) * charactersPerPage
    const end = start + charactersPerPage
    const currentCharacters = characters.slice(start, end)

    return (
      <GridLayout>
        {currentCharacters.map(
          ({ key, birthYear, eyeColor, gender, hairColor, name }) => (
            <CharacterCard
              key={key}
              name={name}
              hairColor={hairColor}
              eyeColor={eyeColor}
              birthYear={birthYear}
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
        <ButtonPag key="prev" handleClick={() => handleClick(prevPage)}>
          Prev
        </ButtonPag>,
      )
    }

    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <ButtonPag key={i} handleClick={() => handleClick(i)}>
          {i}
        </ButtonPag>,
      )
    }

    if (nextPage <= totalPages) {
      pages.push(
        <ButtonPag key="next" handleClick={() => handleClick(nextPage)}>
          Next
        </ButtonPag>,
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
