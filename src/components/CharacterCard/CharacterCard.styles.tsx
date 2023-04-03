import styled from 'styled-components'
import { theme } from '../../infrastructure/theme'
import { Link } from 'react-router-dom'

export const CharacterCardStyled = styled.div`
  border: 1px solid white;
  margin: ${theme.space[2]};
  padding: ${theme.space[2]};
  padding-left: ${theme.space[3]};
  @media screen and (max-width: 768px) {
    padding-left: ${theme.space[2]};
  }
`
export const Title = styled.h2`
  margin-bottom: ${theme.space[2]};
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
