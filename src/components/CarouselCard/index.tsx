import Padmi from '../../assets/images/carousel-padmi.jpg'
import Yoda from '../../assets/images/carousel-yoda.jpg'
import Soja from '../../assets/images/carousel-soja.jpg'
import { CarouselContainer, CarouselImage, CarouselContent, Title, SubTitle } from './CarouselCard.styles'
export default function CarouselCard() {
  return (
    <CarouselContainer>
      <CarouselImage src={Soja} />
      <CarouselContent>
      <Title>Welcome to the info star wars</Title>
      <SubTitle>The platform where you can find information about star wars series</SubTitle>
      </CarouselContent>
    </CarouselContainer>
  )
}
