import React from 'react';
// import Button from '../UI/Button';
import Image from '../UI/Image';
import { Link } from 'react-router-dom';
import bannerImageOne from '../../assets/images/cocktail-image-banner.jpg';

export default function Banner() {
  return (
	<section className='banner'>
		<div className='wrap'>
			<div className='banner__holder'>
				<div className='banner__content'>
					<h1 className='h1 banner__title'>Happy Hour Ketering</h1>
					<p className='text banner__text'>Učinite svoj događaj nezaboravnim uz Happy Hour Euforiju - naš koktel ketering će osvojiti vaša čula i podići atmosferu na vrhunski nivo zabave!</p>
					<div className='banner__cta'>
						<Link to="/offers" aria-label="Pogledaj ponude" title="Pogledaj ponude" className="btn btn--primary banner__btn">pogledaj ponude</Link>
						<Link to="/contact" aria-label="Kontaktiraj nas" title="Kontaktiraj nas" className="btn btn--secondary banner__btn">kontaktiraj nas</Link>
					</div>
				</div>
				<Image className='banner__img banner__img--1' image={bannerImageOne}/>
			</div>
		</div>
	</section>
  )
}
