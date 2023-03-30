import { ReactNode } from 'react';
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import styled from 'styled-components';

interface Props {
  children: ReactNode;
}

const View = styled.div`
min-height: 100vh;
position: relative;
padding-bottom: 8rem;
`

export default function Layout({ children }: Props) {
  return (
    <View>
    <NavBar />
    {children}
    <Footer />
    </View>
  )
}