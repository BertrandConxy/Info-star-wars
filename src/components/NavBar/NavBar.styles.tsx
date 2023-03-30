import styled from 'styled-components'
import { theme } from '../../infrastructure/theme'
import { Link } from 'react-router-dom'

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid;
  border-color: ${theme.colors.ui.secondary};
  padding: ${theme.space[3]};
`

export const NavLinks = styled.div``

export const BrandLink = styled(Link)`
  font-family: ${theme.fonts.brand};
  font-size: ${theme.fontSizes.h1};
  color: ${theme.colors.ui.primary};
`
export const LinkItem = styled(Link)`
  font-family: ${theme.fonts.heading};
  color: ${theme.colors.ui.primary};
  margin-right: ${theme.space[2]};
  transition: 1s;
  &:hover {
    color: ${theme.colors.ui.error}
  }
`
