import styled from 'styled-components'
import { theme } from '../../infrastructure/theme'

export const SearchInput  = styled.input`
 padding: ${theme.sizes[0]};
 border: none;
 border-radius: 5px;

 &:focus {
    outline: 1px solid rgba(255, 255, 255, 0.5);
 }
`