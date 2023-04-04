import { theme } from '../../../infrastructure/theme'
import styled from 'styled-components'

export const Button = styled.button`
  padding: ${theme.space[2]};
  margin-right: ${theme.space[1]};
  font-family: ${theme.fonts.heading};
  &.active {
    border-color: transparent;
    border-radius: 2px;
    background-color: ${theme.colors.ui.danger};
    box-shadow: 0.09rem -0.09rem 0.2rem red;
  }
`
