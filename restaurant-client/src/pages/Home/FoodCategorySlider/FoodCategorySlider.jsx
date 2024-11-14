import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide5.jpg'
import slide5 from '../../../assets/home/slide4.jpg'
import CategorySection from '../../../components/FoodCategorySection/CategorySection';

const FoodCategorySlider = () => {
    return (
       <section className='mb-[4rem]'>
        <CategorySection  
            subHeading={"From 11:00am to 10:00pm"}
            heading={"ORDER ONLINE"}>
        </CategorySection>
         <div className='flex justify-center items-center w-full'>
           <div className="w-[80%]">
           <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        centeredSlides={true}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
       <SwiperSlide>
    <div className="relative">
      <img src={slide1} alt="" />
      <h3 className="absolute inset-x-0 bottom-0 text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl uppercase text-center text-white mb-2">Salad</h3>
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div className="relative">
      <img src={slide2} alt="" />
      <h3 className="absolute inset-x-0 bottom-0 text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl uppercase text-center text-white mb-2">Pizza</h3>
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div className="relative">
      <img src={slide3} alt="" />
      <h3 className="absolute inset-x-0 bottom-0 text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl uppercase text-center text-white mb-2">Soup</h3>
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div className="relative">
      <img src={slide4} alt="" />
      <h3 className="absolute inset-x-0 bottom-0 text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl uppercase text-center text-white mb-2">Salad</h3>
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div className="relative">
      <img src={slide5} alt="" />
      
      <h3 className="absolute inset-x-0 bottom-0 text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl uppercase text-center text-white mb-2">Dessert</h3>
    </div>
  </SwiperSlide>
      </Swiper>
           </div>
        </div>
       </section>
    );
};

export default FoodCategorySlider;