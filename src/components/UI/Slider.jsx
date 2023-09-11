import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import SliderItem from './SliderItem';

import bannerImageOne from '../../assets/images/banner-img-1.png';
import bannerImageTwo from '../../assets/images/banner-img-2.png';
import bannerImageThree from '../../assets/images/banner-img-3.png';

export default function Slider() {
	const slides = [
		{
			id: 0,
			image: bannerImageOne
		},
		{
			id: 1,
			image: bannerImageTwo
		},
		{
			id: 2,
			image: bannerImageThree
		}
	]
  return (
	<Swiper
		spaceBetween={50}
		slidesPerView={1}
		pagination={{ clickable: true }}
		modules={[EffectFade, Pagination]}
		effect="fade"
	>
		{slides.map(slide => {
			 return <SwiperSlide key={slide.id}>
				<SliderItem image={slide.image}/>
			</SwiperSlide>
		})}
	</Swiper>
  )
}
