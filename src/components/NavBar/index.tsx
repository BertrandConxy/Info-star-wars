import { BrandLink, NavContainer, LinkItem, NavLinks } from './NavBar.styles'
import Search from '../Search'
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
  return (
    <NavContainer>
      <BrandLink to="/">Star Wars</BrandLink>
      <NavLinks>
        {Links.map(({ id, path, text }) => (
          <LinkItem to={path} key={id}>
            {text}
          </LinkItem>
        ))}
      </NavLinks>
      <Search />
    </NavContainer>
  )
}
