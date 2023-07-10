import React from 'react';
import Header from '../shared/Header';
import Banner from '../modules/Banner';
import About from '../modules/About';
import Offers from '../modules/Offers';
import Contact from '../shared/Contact';
import Footer from '../shared/Footer';
import Testimonials from '../modules/Testimonials';
import Button from '../UI/Button';
import { Icon } from '@iconify/react';

export default function Homepage() {
	const scrollToTopHandler = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	}

	return (
		<div className='homepage'>
			<Header />
			<Banner />
			<About />
			<Offers />
			<Testimonials />
			<Contact />
			<Footer />
			<Button className='btn--scroll' onClickHandler={scrollToTopHandler} aria-label='Scroll to the top of the page'>
				<Icon icon="bxs:up-arrow" />
				<span className='sr-only'>Scroll to top</span>
			</Button>
			<span className='homepage-mask' aria-hidden='true'>
				<span aria-hidden='true'>
					<Icon icon="emojione-v1:cocktail-glass" />
				</span>
			</span>
		</div>
	)
}
