import React from 'react'
import './projects.css';
import {ProjectData} from "./ProjectData";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Projects = () => {
  return (
    <section className='project container section' id='projects'>
        <h2 className='section__title'>My projects</h2>
        <span className='section__subtitle'></span>

        <Swiper className='project__container'
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination]}
        >
            {ProjectData.map(({id, image, title, description}) => {
                return (
                    <SwiperSlide className='project__card' key={id}>
                        <img src={image} alt="" className='project__img'></img>
                        <h3 className='project__name'>{title}</h3>
                        <p className='project__description'>{description}</p>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    </section>
  )
}

export default Projects