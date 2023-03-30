import { SearchInput, SearchButton, Form } from './Search.styles'
import SearchIcon from '@mui/icons-material/Search'

export default function Search() {
  return (
    <Form>
      <SearchInput type="search" placeholder="Search character..." />
      <SearchButton type="submit">
        <SearchIcon fontSize='large' />
      </SearchButton>
    </Form>
  )
}
