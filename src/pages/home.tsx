import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import Padmi from '../assets/images/carousel-padmi.jpg';
import Yoda from '../assets/images/carousel-yoda.jpg';
import Soja from '../assets/images/carousel-soja.jpg';
import CarouselCard from '../components/CarouselCard';
// import 'swiper/css';
// import 'swiper/css/autoplay';
import 'swiper/css/pagination';

interface iImageData {
  id: number;
  imagePath: string;
  title: string;
  subTitle: string;
}

const imageData:iImageData[] = [
  {
    id: 1,
    imagePath: Padmi,
    title: 'Welcome to the info star wars',
    subTitle: 'The platform where you can find information about star wars series'
  },
  // {
  //   id: 2,
  //   imagePath: Yoda,
  //   title: 'Welcome to the info star wars',
  //   subTitle: 'The platform where you can find information about star wars series'
  // },
  // {
  //   id: 3,
  //   imagePath: Soja,
  //   title: 'Welcome to the info star wars',
  //   subTitle: 'The platform where you can find information about star wars series'
  // }
]
export default function Home() {
  return (
//     <Swiper
//     slidesPerView={1}
//     autoplay={{
//       delay: 50000,
//       disableOnInteraction: false,
//     }}
//     loop
//     modules={[Autoplay,Pagination]}
//   >
// {
//   imageData.map(({id, imagePath, title, subTitle}) => (
//     <SwiperSlide key={id}>
//         <img src={imagePath}/>
//         <h2>{title}</h2>
//         <p>{subTitle}</p>
//     </SwiperSlide>
//   ))
// }
//   </Swiper>

<CarouselCard />
  )
}
