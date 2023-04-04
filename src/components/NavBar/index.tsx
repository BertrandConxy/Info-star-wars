import {
  BrandLink,
  NavContainer,
  LinkItem,
  NavBox,
  NavLinks,
  HamburgerButton,
  CloseButton,
} from './NavBar.styles'
import Search from '../Search'
import { useState, useEffect } from 'react'
import { Links } from '../../data/navigation'
import { iLink } from '../../typeDefs/navLink'

export default function NavBar({
  Searched,
}: {
  Searched: (search: string) => void
}) {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false)
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth)
  const [links, setLinks] = useState<iLink[]>([...Links])
  const closeNav = () => {
    setToggleMenu(false)
  }
  const openNav = () => {
    setToggleMenu(true)
  }

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth)
    }
    window.addEventListener('resize', changeWidth)
    return () => {
      window.removeEventListener('resize', changeWidth)
    }
  }, [])

  useEffect(() => {
    let visitedLinks: string[] = []
    const storedVisitedLinks = localStorage.getItem('visitedLinks')
    if (storedVisitedLinks) {
      const stringify = JSON.parse(storedVisitedLinks)
      visitedLinks = [...stringify]
      visitedLinks = visitedLinks.slice(0, 3)
      const modifiedLinks: iLink[] = visitedLinks.map((linky) => {
        return {
          id: linky.split('/').pop()!,
          path: linky,
          text: `Char ${linky.split('/').pop()}`,
        }
      })
      setLinks((prevLinks) => {
        const existingIds = prevLinks.map((link) => link.id)
        const newLinks = modifiedLinks.filter(
          (link) => !existingIds.includes(link.id),
        )
        return [...prevLinks.concat(newLinks)]
      })
    }
  }, [])

  return (
    <NavContainer>
      <BrandLink to="/">Star Wars</BrandLink>
      {(toggleMenu || screenWidth > 768) && (
        <NavBox>
          <CloseButton onClick={closeNav} />
          <NavLinks>
            {links.map(({ id, path, text }) => (
              <LinkItem to={path} key={id} onClick={closeNav}>
                {text}
              </LinkItem>
            ))}
          </NavLinks>
          <Search handleSearch={Searched} />
        </NavBox>
      )}
      <HamburgerButton onClick={openNav} />
    </NavContainer>
  )
}
