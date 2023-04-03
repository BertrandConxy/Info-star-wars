import { ReactNode } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import styled from 'styled-components'

interface Props {
  children: ReactNode
  handleSearched: (search: string) => void
}

const View = styled.div`
  min-height: 100vh;
  position: relative;
  padding-bottom: 7.5rem;
  @media screen and (max-width: 768px) {
    padding-bottom: 8rem;
  }
`

export default function Layout({ children, handleSearched }: Props) {
  return (
    <View>
      <NavBar Searched={handleSearched} />
      {children}
      <Footer />
    </View>
  )
}
