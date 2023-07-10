import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import bannerImageOne from '../../assets/images/banner-img-1.png';
import bannerImageTwo from '../../assets/images/banner-img-2.png';
import bannerImageThree from '../../assets/images/banner-img-3.png';

export default function AboutSingle() {
  return (
	<section className='about' data-id='about'>
	  <div className='wrap'>
		<div className='about__content'>
			<div className='about__col about__col--info'>
				<h2 className='h2 about__title'>About us</h2>
				<p className='text about__text'>Lorem ipsum dolor sit amet consectetur adipiscing elit gravida elementum dignissim urna ornare, duis libero molestie malesuada sed viverra leo tellus ac natoque. Nascetur porta egestas lacus fringilla vivamus sociis nostra velit nam auctor mi, magnis tristique habitasse volutpat cursus venenatis cras ad per. Lorem ipsum dolor sit amet consectetur adipiscing elit gravida elementum dignissim urna ornare, duis libero molestie malesuada sed viverra leo tellus ac natoque. Nascetur porta egestas lacus fringilla vivamus sociis nostra velit nam auctor mi, magnis tristique habitasse volutpat cursus venenatis cras ad per.</p>
			</div>
			<div className='about__col about__col--images'>
				<Swiper
					spaceBetween={50}
					slidesPerView={1}
     				pagination={{ clickable: true }}
					modules={[EffectFade, Pagination]}
					effect="fade"
				>
					<SwiperSlide className='about__slide'>
						<div className='about__img-holder'>
							<div className='about__img has-cover' style={{ backgroundImage: `url(${bannerImageOne})`}} role='presentation'/>
						</div>
					</SwiperSlide>
					<SwiperSlide className='about__slide'>
						<div className='about__img-holder'>
							<div className='about__img has-cover' style={{ backgroundImage: `url(${bannerImageTwo})`}} role='presentation'/>
						</div>
					</SwiperSlide>
					<SwiperSlide className='about__slide'>
						<div className='about__img-holder'>
							<div className='about__img has-cover' style={{ backgroundImage: `url(${bannerImageThree})`}} role='presentation'/>
						</div>
					</SwiperSlide>
					<SwiperSlide className='about__slide'>
						<div className='about__img-holder'>
							<div className='about__img has-cover' style={{ backgroundImage: `url(${bannerImageOne})`}} role='presentation'/>
						</div>
					</SwiperSlide>
					<SwiperSlide className='about__slide'>
						<div className='about__img-holder'>
							<div className='about__img has-cover' style={{ backgroundImage: `url(${bannerImageTwo})`}} role='presentation'/>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	  </div>
	</section>
	)
}
