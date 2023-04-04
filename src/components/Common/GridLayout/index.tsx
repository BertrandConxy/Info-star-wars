import { ReactNode } from 'react'
import styled from 'styled-components'
import { theme } from '../../../infrastructure/theme'

interface Props {
  children: ReactNode
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: ${theme.space[3]};

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`
export default function GridLayout({ children }: Props) {
  return <Grid>{children}</Grid>
}
