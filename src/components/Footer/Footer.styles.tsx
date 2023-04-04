import styled from 'styled-components'
import { theme } from '../../infrastructure/theme'
import { Link } from 'react-router-dom'

export const FooterContainer = styled.footer`
  display: flex;
  position: absolute;
  width: 100%;
  bottom: 0;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid;
  border-color: ${theme.colors.ui.secondary};
  padding: ${theme.space[3]};
`

export const BrandLink = styled(Link)`
  font-family: ${theme.fonts.brand};
  font-size: ${theme.fontSizes.h1};
  color: ${theme.colors.ui.primary};
  flex-grow: 1;
  @media screen and (max-width: 768px) {
    font-size: ${theme.fontSizes.h3};
  }
`

export const Text = styled.h5`
  font-family: ${theme.fonts.heading};
`
