import SwiperCore,{ Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import React,{useState} from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './swiper-component.scss';

SwiperCore.use([Navigation,Pagination,Autoplay]);

 const SwiperComponent=(props) => {
 const [swiperInstabce,setSwiperInstance] = useState(null);
 const [activeIndex,setActiveIndex] = useState(0);
  const slides = [
    'csharp.png',
    'js.png',
    'java.png',
    'csharp.png',
    'js.png',
    'java.png',
  ];
  
  return (
  <div className='container'>
    <Swiper
    slidesPerView={3}
    navigation
    pagination ={{clickable: true}}
   //autoplay
    onSwiper={(swiper) => setSwiperInstance(swiper)}
    effect
    onSlideChange={(swiper) => {
      setActiveIndex(swiper?.activeIndex);
    }}
  >
    {slides.map((item ,key)=>
    (
      <div>
      <SwiperSlide> 
        <div className='image-swiper'>
        <img src={require('./images/'+item)}/>
        </div>
      </SwiperSlide>
      </div>
    )
    )
    }
  </Swiper>
  </div>
    );
};

export default SwiperComponent;