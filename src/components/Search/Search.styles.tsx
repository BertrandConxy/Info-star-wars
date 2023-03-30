import styled from 'styled-components'
import { theme } from '../../infrastructure/theme'
import { FaSearch } from 'react-icons/fa'

export const SearchInput  = styled.input`
 padding: ${theme.sizes[0]};
 border: none;
 border-radius: 5px;

 &:focus {
    outline: 1px solid rgba(255, 255, 255, 0.5);
 }
`

export const SearchButton = styled.button`
background-color: transparent;
border: none;
cursor: pointer;
`

export const Form = styled.form`
display: flex;
justify-content: center;
align-items: center;
gap: ${theme.sizes[0]};
`

export const SearchIcon  = styled(FaSearch)`
font-size: 2rem;
cursor: pointer;
`