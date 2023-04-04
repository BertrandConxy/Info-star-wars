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
  object-position: center;
  filter: contrast(150%) brightness(0.6);
`

export const CarouselContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  transform: translate(10%, 100%);
  @media screen and (max-width: 768px) {
    transform: translate(2%, 100%);
  }
`

export const Title = styled.h2`
  font-size: ${theme.fontSizes.h1};
  font-family: ${theme.fonts.heading};
  font-weight: ${theme.fontWeights.bold};
  width: 50%;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`
export const SubTitle = styled.p`
  margin-top: 20px;
  width: 40%;
  @media screen and (max-width: 768px) {
    width: 80%;
  }
`
