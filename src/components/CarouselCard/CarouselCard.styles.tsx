import styled from 'styled-components'
import { theme } from '../../infrastructure/theme'

export const CarouselContainer = styled.div`
width: 100%;
height: 100vh;
position: relative;
`

export const CarouselImage = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
object-position: right center;
filter: contrast(150%) brightness(0.4);
`

export const CarouselContent = styled.div`
position: absolute;
top: 0;
left: 0;
`

export const Title = styled.h2`

`
export const SubTitle = styled.p``
