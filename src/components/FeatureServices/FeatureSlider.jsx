import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation,Autoplay,Pagination  } from 'swiper/modules';
import services from "../../localJson/service";
// Import Swiper styles
import "swiper/css";
import 'swiper/css/navigation';
import ServiceBox from "../ServiceBox/ServiceBox";
export default function FeatureSlider() {
  return (
    <>
      <Swiper
       modules={[Navigation,Autoplay,Pagination]}
       loop= {true}
       pagination={{ clickable: true }}
       autoplay={{ delay: 3000 }}
      navigation
        spaceBetween={50}
        slidesPerView={3}
        breakpoints={{
            375: {
              slidesPerView: 1,
              spaceBetween: 15,
              
            },
            450: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 5,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1100: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
        }
    }
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {services.map((service)=>{
           return( <SwiperSlide key={service.id}>
                <ServiceBox  service={service} slider="slider"></ServiceBox>
            </SwiperSlide>)
        })}
      </Swiper>
    </>
  );
}
