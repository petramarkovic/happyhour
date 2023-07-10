import React from 'react';
import { Link } from 'react-router-dom';

export default function NavigationItem(props) {
	return (
		<li className='nav__item'>
			<Link to={props.to} aria-label={props.name} title={props.name} className={`nav__link ${props.className ? props.className : ''}`}>
			{props.name}
			</Link>
		</li>
	)
}
