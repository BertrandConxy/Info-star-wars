import styled from 'styled-components'
import { theme } from '../../../infrastructure/theme'

interface Props {
  text: string | number
  handleClick: () => void
  active?: boolean
}

const Button = styled.button`
  padding: 10px;
  margin-right: 4px;
  font-family: ${theme.fonts.heading};
  &.active {
    border-color: transparent;
    border-radius: 2px;
    background-color: ${theme.colors.ui.danger};
    box-shadow: 0.09rem -0.09rem 0.2rem red;
  }
`
export default function ButtonPag({ text, handleClick, active }: Props) {
  return (
    <Button onClick={handleClick} className={`${active ? 'active' : null}`}>
      {text}
    </Button>
  )
}
