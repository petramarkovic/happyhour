import React from 'react';
import ListItem from './ListItem';

export default function List(props) {
  return (
	<ul className='list'>
	  {props.items.map((item) => {
		return <ListItem key={item.id} className={item.className}>{item.text}</ListItem>
	  })}
	</ul>
  )
}
