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
import Image from 'next/image';
import { clientDefinition } from '@/lib/definition';

export const ClientsSection = () => {
  const { client } = headerData;
  return (
    <section ref={clientRef} id={`client`} className={` pb-32 pt-36`}>
      <div className={`container`}>
        <div className={`w-full px-4`}>
          <div className={`mx-auto mb-16 max-w-xl text-center`}>
            <h4
              className={`mb-2 text-lg font-semibold text-primary md:text-xl lg:text-2xl`}
            >
              Clients
            </h4>
            <h2
              className={`mb-4 text-3xl font-bold text-dark sm:text-4xl lg:text-4xl`}
            >
              Clients that used our services
            </h2>
          </div>
        </div>

        <div className={`w-full px-4`}>
          <div className={`flex flex-wrap items-center justify-center`}>
            <CarouselWithContent clients={client} />
          </div>
        </div>
      </div>
    </section>
  );
};

export function CarouselWithContent({
  clients,
}: {
  clients: clientDefinition[];
}) {
  const slidesPerView: number = 3;
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={10}
      slidesPerView={slidesPerView}
      autoplay={true}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {clients.map((item, index) => (
        <>
          <SwiperSlide key={index}>
            <div
              style={{
                alignItems: 'center',
                justifyItems: 'center',
                flex: 1,
                flexDirection: 'column',
              }}
            >
              <Image
                src={item.clientPic}
                alt={item.clientName}
                width={100}
                height={100}
                style={{
                  width: '30%',
                }}
              />
            </div>
          </SwiperSlide>
        </>
      ))}
    </Swiper>
  );
}
