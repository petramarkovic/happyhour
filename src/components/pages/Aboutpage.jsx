import React from 'react';
import Header from '../shared/Header';
import AboutSingle from '../modules/AboutSingle';
import Testimonials from '../modules/Testimonials';
import Contact from '../shared/Contact';
import Footer from '../shared/Footer';
import Button from '../UI/Button';
import { Icon } from '@iconify/react';

export default function Aboutpage() {
	const scrollToTopHandler = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	}

	return (
		<div className='aboutuspage'>
			<Header />
			<AboutSingle />
			<Testimonials />
			<Contact />
			<Footer />
			<Button className='btn--scroll' onClickHandler={scrollToTopHandler} aria-label='Scroll to the top of the page'>
				<Icon icon="bxs:up-arrow" />
				<span className='sr-only'>Scroll to top</span>
			</Button>
		</div>
	)
}
