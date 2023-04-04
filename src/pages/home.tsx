import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import Padmi from '../assets/images/carousel-padmi.jpg'
import Yoda from '../assets/images/carousel-yoda.jpg'
import Robot from '../assets/images/carousel-robot.jpg'
import CarouselCard from '../components/CarouselCard'
import 'swiper/css'
import 'swiper/css/autoplay'

interface iImageData {
  id: number
  imagePath: string
  title: string
  subTitle: string
}

const imageData: iImageData[] = [
  {
    id: 1,
    imagePath: Robot,
    title: 'Welcome to the info star wars',
    subTitle:
      'The platform where you can find information about star wars series',
  },
  {
    id: 2,
    imagePath: Yoda,
    title: 'You can find all the characters',
    subTitle:
      'The info star wars provides you with all the characters in the series',
  },
  {
    id: 3,
    imagePath: Padmi,
    title: 'View the profile of each character in the series',
    subTitle:
      'The info star wars provides profile of each character in the series',
  },
]

export default function Home() {
  return (
    <Swiper
      slidesPerView={1}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop
      modules={[Autoplay]}
    >
      {imageData.map(({ id, imagePath, title, subTitle }) => (
        <SwiperSlide key={id}>
          <CarouselCard image={imagePath} title={title} subtitle={subTitle} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
