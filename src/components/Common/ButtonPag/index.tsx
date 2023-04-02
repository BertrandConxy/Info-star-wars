import { ReactNode } from 'react'
import styled from 'styled-components'

interface Props {
  children: ReactNode
  handleClick: () => void
}

const Button = styled.button`
  padding: 10px;
  margin-right: 4px;

`
export default function ButtonPag({ children, handleClick }: Props) {
  return <Button onClick={handleClick}>{children}</Button>
}
