import { ReactNode } from 'react';
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
    <NavBar />
    {children}
    <Footer />
    </>
  )
}