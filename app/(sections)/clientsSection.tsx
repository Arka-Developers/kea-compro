import { clientRef } from '@/lib/script';
// import Image from 'next/image';
import React from 'react';
import { headerData } from '@/lib/const';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const ClientsSection = () => {
  const { companySelfDefinition } = headerData;
  return (
    <section
      ref={clientRef}
      id={`client`}
      className={`bg-cyan-100 pb-32 pt-36`}
    >
      <div className={`container`}>
        <div className={`w-full px-4`}>
          <div className={`mx-auto mb-16 max-w-xl text-center`}>
            <h4 className={`mb-2 text-lg font-semibold text-primary`}>
              Clients
            </h4>
            <h2
              className={`mb-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl`}
            >
              Our Happy Clients
            </h2>
            <p className={`text-md font-medium text-dark md:text-lg`}>
              {companySelfDefinition}
            </p>
          </div>
        </div>

        <div className={`w-full px-4`}>
          <div className={`flex flex-wrap items-center justify-center`}>
            <CarouselWithContent />
          </div>
        </div>
      </div>
    </section>
  );
};

export function CarouselWithContent() {
  const slidesPerView: number = 3;
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={50}
      slidesPerView={slidesPerView}
      autoplay={true}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <img
          src='https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80'
          alt='image 1'
          className='h-full w-full object-cover'
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src='https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80'
          alt='image 1'
          className='h-full w-full object-cover'
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src='https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80'
          alt='image 1'
          className='h-full w-full object-cover'
        />
      </SwiperSlide>{' '}
      <SwiperSlide>
        <img
          src='https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80'
          alt='image 1'
          className='h-full w-full object-cover'
        />
      </SwiperSlide>{' '}
      <SwiperSlide>
        <img
          src='https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80'
          alt='image 1'
          className='h-full w-full object-cover'
        />
      </SwiperSlide>
    </Swiper>
  );
}
