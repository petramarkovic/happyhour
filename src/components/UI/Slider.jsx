import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import SliderItem from './SliderItem';

import sliderImageOne from '../../assets/images/cocktail-image-4.jpg';
import sliderImageTwo from '../../assets/images/marko-image-2.jpg';
import sliderImageThree from '../../assets/images/igor-markovic-image-2.jpg';
import sliderImageFour from '../../assets/images/marko-image-3.jpg';
import sliderImageFive from '../../assets/images/cocktails-image-4.jpg';
import sliderImageSix from '../../assets/images/igor-markovic-image-3.jpg';

export default function Slider() {
	const slides = [
		{
			id: 0,
			image: sliderImageOne
		},
		{
			id: 1,
			image: sliderImageTwo
		},
		{
			id: 2,
			image: sliderImageThree
		},
		{
			id: 3,
			image: sliderImageFour
		},
		{
			id: 4,
			image: sliderImageFive
		},
		{
			id: 5,
			image: sliderImageSix
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
