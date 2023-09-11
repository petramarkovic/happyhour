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
				<p className='text about__text'>Happy Hour Koktel Ketering je spoj strasti prema koktelima i bogatog iskustva u njihovoj pripremi. Naš tim čine dva iskusna barmena s dugogodišnjim stažem u ovoj veštini, spremna da vašem događaju donesu pravi šarm.</p>
				<p className='text about__text'>Svojom kreativnošću i raznovrsnom paletom koktela, obezbeđujemo nezaboravan doživljaj ukusa koji će obogatiti svaki važan trenutak. Bez obzira na vrstu događaja, Happy Hour Koktel Ketering pruža elegantnu uslugu, brižljivo odabrane sastojke i koktele pripremljene s profesionalizmom, koji će oduševiti vaše goste. Učinite vaš događaj posebnim uz nas i doživite pravu umetnost koktela. Živeli! 🍹🍸</p>
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
