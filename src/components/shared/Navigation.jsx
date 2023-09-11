import React, { useEffect, useState, useRef } from 'react';
import NavigationItem from './NavigationItem';
import { Icon } from '@iconify/react';

const Navigation = () => {
	const [isNavOpen, setIsNavOpen] = useState(false);
	const navRef = useRef(null);

	useEffect(() => {
		if (!isNavOpen) {
			navRef.current.classList.remove('nav--active');
			document.body.classList.remove('scroll-disabled');
		} else {
			navRef.current.classList.add('nav--active');
			document.body.classList.add('scroll-disabled');
		}
	}, [isNavOpen]);

	const navItemsArray = [
		{
			id: 0,
			name: 'naslovna',
			url: '/'
		},
		{
			id: 1,
			name: 'o nama',
			url: '/about'
		},
		{
			id: 2,
			name: 'ponude',
			url: '/offers'
		},
		{
			id: 3,
			name: 'kontakt',
			url: '/contact'
		}
	];

	const navItems = navItemsArray.map(item => <NavigationItem  key={item.id} name={item.name} to={item.url} />);

	const openMenuHandler = () => {
		setIsNavOpen(true);
	}

	const closeMenuHandler = () => {
		setIsNavOpen(false);
	}

	return (
	<nav className='nav js-nav' ref={navRef}>
		<button type='button' className='nav__btn' onClick={openMenuHandler} aria-label='Open menu'>
			<span aria-hidden='true'>
				<Icon icon="ci:menu-alt-02" className='menu'/>
			</span>
			<span className='sr-only'>Open menu icon</span>
		</button>
		<button type='button' className='nav__btn' onClick={closeMenuHandler} aria-label='Close menu'>
			<span aria-hidden='true'>
				<Icon icon="line-md:close" className='menu-close'/>
			</span>
			<span className='sr-only'>Close menu icon</span>
		</button>
		<ul className='nav__list'>
			{navItems}
		</ul>
		<div className='nav__backdrop' onClick={closeMenuHandler}></div>
	</nav>
	)
}

export default Navigation;