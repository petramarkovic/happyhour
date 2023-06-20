import React from 'react';
import NavigationItem from './NavigationItem';
import { Icon } from '@iconify/react';

export default function Navigation() {
	const navItemsArray = [
		{
			id: 1,
			name: 'naslovna',
			url: '/'
		},
		{
			id: 2,
			name: 'o nama',
			url: '/'
		},
		{
			id: 3,
			name: 'ponude',
			url: '/'
		},
		{
			id: 4,
			name: 'upitnik',
			url: '/'
		},
		{
			id: 5,
			name: 'kontakt',
			url: '/'
		}
	];

	const navItems = navItemsArray.map(item => <NavigationItem  key={item.id} name={item.name} url={item.url} />);

	const openMenuHandler = () => {
		const nav = document.querySelector('.js-nav');
		nav.classList.add('nav--active');
	}

	const closeMenuHandler = () => {
		const nav = document.querySelector('.js-nav');
		nav.classList.remove('nav--active');
	}

	return (
	<nav className='nav js-nav'>
		<button type='button' className='nav__btn' onClick={openMenuHandler}>
			<Icon icon="ci:menu-alt-02" className='menu'/>
		</button>
		<button type='button' className='nav__btn' onClick={closeMenuHandler}>
			<Icon icon="line-md:close" className='menu-close'/>
		</button>
		<ul className='nav__list'>
			{navItems}
		</ul>
		<div className='nav__backdrop'></div>
	</nav>
	)
}
