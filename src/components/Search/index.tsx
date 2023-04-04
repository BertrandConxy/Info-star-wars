import React from 'react'
import { SearchInput, SearchButton, SearchIcon, Form } from './Search.styles'
import { useState } from 'react'

export default function Search({
  handleSearch,
}: {
  handleSearch: (search: string) => void
}) {
  const [searchInput, setSearchInput] = useState<string>('')
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const value = (e.currentTarget.elements[0] as HTMLInputElement).value
    handleSearch(value)
  }
  return (
    <Form role="form" onSubmit={handleSubmit}>
      <SearchInput
        type="search"
        placeholder="Search character..."
        value={searchInput}
        onChange={handleChange}
      />
      <SearchButton type="submit" role="submit">
        <SearchIcon />
      </SearchButton>
    </Form>
  )
}
