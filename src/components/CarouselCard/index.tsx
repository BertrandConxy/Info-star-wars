import { CarouselContainer, CarouselImage, CarouselContent, Title, SubTitle } from './CarouselCard.styles'

interface iCarousel {
image: string;
title: string;
subtitle: string;
}
export default function CarouselCard({image, title, subtitle}:iCarousel) {
  return (
    <CarouselContainer>
      <CarouselImage src={image} />
      <CarouselContent>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
      </CarouselContent>
    </CarouselContainer>
  )
}
