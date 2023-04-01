import { useState } from "react";
import { iCharacter } from "../typeDefs/character";
import { charactersArray } from "../data/characters";
import CharacterCard from "../components/CharacterCard";

function Characters({ characters=charactersArray }:{characters:iCharacter[]}) { 
  const [currentPage, setCurrentPage] = useState(1);
  const charactersPerPage = 5;
  const totalPages = Math.ceil(characters.length / charactersPerPage);

  const handleClick = (page: number) => {
    setCurrentPage(page);
  };

  const renderCharacters = () => {
    const start = (currentPage - 1) * charactersPerPage;
    const end = start + charactersPerPage;
    const currentCharacters = characters.slice(start, end);

    return currentCharacters.map(({key, birthYear, eyeColor, gender, hairColor, name}) => (
      <CharacterCard key={key} name={name} hairColor={hairColor} eyeColor={eyeColor} birthYear={birthYear} gender={gender}  />
    ));
  };

  const renderPagination = () => {
    const pages = [];
    const prevPage = currentPage - 1;
    const nextPage = currentPage + 1;
  
    if (prevPage > 0) {
      pages.push(
        <button key="prev" onClick={() => handleClick(prevPage)}>
          Prev
        </button>
      );
    }
  
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button key={i} onClick={() => handleClick(i)}>
          {i}
        </button>
      );
    }
  
    if (nextPage <= totalPages) {
      pages.push(
        <button key="next" onClick={() => handleClick(nextPage)}>
          Next
        </button>
      );
    }
  
    return pages;
  };

  return (
    <div>
      {renderCharacters()}
      {renderPagination()}
    </div>
  );
};

export default Characters;
