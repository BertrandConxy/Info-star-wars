import { SearchInput, SearchButton, SearchIcon, Form } from './Search.styles'

export default function Search() {
  return (
    <Form>
      <SearchInput type="search" placeholder="Search character..." />
      <SearchButton type="submit">
        <SearchIcon />
      </SearchButton>
    </Form>
  )
}
