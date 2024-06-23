"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";

const Slider = ({ slides, heading }) => {
  return (
    <section className="py-7 lg:py-10">
      {heading && (
        <h1 className="md:text-xl lg:text-2xl text-center font-semibold mb-3 lg:mb-5 uppercase">
          {heading}
        </h1>
      )}

      <Swiper
        slidesPerView={1}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 1,
          },
          1080: {
            slidesPerView: 4,
          },
        }}
      >
        {slides &&
          slides?.map(({ title, image, path }, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="bg-secondary-clr">
                  <Link className="relative group" href={path}>
                    <Image
                      className="relative aspect-square w-full object-cover"
                      src={image}
                      blurDataURL={image}
                      placeholder="blur"
                      alt={title}
                      width={1000}
                      height={1000}
                    ></Image>

                    <div className="absolute w-full h-full inset-0 bg-black/20 transition-opacity opacity-0 group-hover:opacity-100"></div>
                  </Link>

                  <div className="flex justify-center p-5 uppercase text-sm">
                    <Link href={path}>{title}</Link>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </section>
  );
};

export default Slider;
