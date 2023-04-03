import styled from 'styled-components'
import { theme } from '../../infrastructure/theme'
import { Link } from 'react-router-dom'

export const CharacterCardStyled = styled.div`
  border: 1px solid white;
  margin: 10px;
  padding: 10px;
  padding-left: 20px;
  @media screen and (max-width: 768px) {
    padding-left: 10px;
  }
`
export const Title = styled.h2`
  margin-bottom: 10px;
`

export const Content = styled.p`
  font-weight: bold;
`

export const Span = styled.span`
  font-weight: normal;
`

export const LinkContainer = styled(Link)`
  color: ${theme.colors.brand.primary};
`
