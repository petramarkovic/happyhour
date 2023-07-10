import React from 'react';
import NavigationItem from './NavigationItem';
import { Icon } from '@iconify/react';

export default function Footer() {
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

	const navItems = navItemsArray.map(item => <NavigationItem  key={item.id} name={item.name} title={item.name} aria-label={item.name} to={item.url} className='footer__link'/>);

	return (
		<footer className='footer'>
			<div className='wrap'>
				<div className='footer__content'>
					<div className='footer__col footer__col--sm'>
						<span className='footer__copy'>
							<Icon icon="solar:copyright-broken" />
							<span className='footer__copy-text'>developetra</span>
						</span>
					</div>
					<div className='footer__col'>
						<ul className='footer__list'>
							{navItems}
						</ul>
					</div>
				</div>
			</div>
		</footer>
	)
}
