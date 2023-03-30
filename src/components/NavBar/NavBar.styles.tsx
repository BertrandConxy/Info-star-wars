import styled from "styled-components"
import { theme } from "../../infrastructure/theme"

export const NavContainer = styled.div`
border-bottom: 1px solid black;
padding: 2rem;
`

export const Brand = styled.h1`
font-family: ${theme.fonts.brand};
font-size: 3rem;
`
export const Text = styled.h2`
font-family: ${theme.fonts.body}
font-weight: ${theme.fontWeights.medium}
`