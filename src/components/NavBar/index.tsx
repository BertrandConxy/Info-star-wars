import { BrandLink, NavContainer, LinkItem, NavBox, NavLinks, HamburgerButton, CloseButton } from './NavBar.styles'
import Search from '../Search'
import {useState, useEffect} from 'react'
interface iLink {
  id: number
  path: string
  text: string
}

const Links: iLink[] = [
  {
    id: 1,
    path: '/',
    text: 'Home',
  },
  {
    id: 2,
    path: '/characters',
    text: 'Characters',
  },
]


export default function NavBar() {
    const [toggleMenu, setToggleMenu] = useState<boolean>(false)
    const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth)
    const closeNav = () => {
        setToggleMenu(false)
      }
    const openNav = () => {
        setToggleMenu(true)
      }

      useEffect(() => {

        const changeWidth = () => {
          setScreenWidth(window.innerWidth);
        }
    
        window.addEventListener('resize', changeWidth)
        return () => {
            window.removeEventListener('resize', changeWidth)
        }
      }, [])
  return (
    <NavContainer>
      <BrandLink to="/">Star Wars</BrandLink>
      {
        (toggleMenu || screenWidth > 768) && (

      <NavBox>
            <CloseButton onClick={closeNav} />
        <NavLinks>

        {Links.map(({ id, path, text }) => (
            <LinkItem to={path} key={id} onClick={closeNav}>
            {text}
          </LinkItem>
        ))}
        </NavLinks>
      <Search />
      </NavBox>
        )
      }
     <HamburgerButton onClick={openNav} />
    </NavContainer>
  )
}
