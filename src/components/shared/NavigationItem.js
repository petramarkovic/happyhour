import React from 'react'

export default function NavigationItem(props) {
  return (
	<li className='nav__item'>
	  <a href={props.url} className='nav__link'>
	  	{props.name}
	  </a>
	</li>
  )
}
