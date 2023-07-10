import React from 'react'

export default function ListItem(props) {
  return (
	<li className={`list__item ${props.className ? props.className : ''}`}>
		{props.children}
	</li>
  )
}
