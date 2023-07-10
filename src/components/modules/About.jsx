import React from 'react';
import { Link } from 'react-router-dom';
import bannerImageOne from '../../assets/images/banner-img-1.png';
import bannerImageTwo from '../../assets/images/banner-img-2.png';
import bannerImageThree from '../../assets/images/banner-img-3.png';

export default function About() {
  return (
	<section className='about' data-id='about'>
	  <div className='wrap'>
		<div className='about__content'>
			<div className='about__col about__col--info'>
				<h2 className='h2 about__title'>O nama</h2>
				<p className='text about__text'>Lorem ipsum dolor sit amet consectetur adipiscing elit gravida elementum dignissim urna ornare, duis libero molestie malesuada sed viverra leo tellus ac natoque. Nascetur porta egestas lacus fringilla vivamus sociis nostra velit nam auctor mi, magnis tristique habitasse volutpat cursus venenatis cras ad per.</p>
			</div>
			<div className='about__col about__col--images'>
			<div className='about__img-holder'>
					<div className='about__img has-cover' style={{ backgroundImage: `url(${bannerImageOne})`}} role='presentation'/>
				</div>
				<div className='about__img-holder'>
					<div className='about__img has-cover' style={{ backgroundImage: `url(${bannerImageTwo})`}} role='presentation'/>
				</div>
				<div className='about__img-holder'>
					<div className='about__img has-cover' style={{ backgroundImage: `url(${bannerImageThree})`}} role='presentation'/>
				</div>
				<div className='about__img-holder'>
					<div className='about__img has-cover' style={{ backgroundImage: `url(${bannerImageOne})`}} role='presentation'/>
				</div>
				<div className='about__img-holder'>
					<div className='about__img has-cover' style={{ backgroundImage: `url(${bannerImageTwo})`}} role='presentation'/>
				</div>
			</div>
			<Link to="/about" aria-label="Pogledaj galeriju" title="Pogledaj galeriju" className="btn btn--primary about__btn">
				pogledaj galeriju
			</Link>
		</div>
	  </div>
	</section>
	)
}
