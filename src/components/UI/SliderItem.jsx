import React from 'react';

export default function SliderItem(props) {
  return (
	<div className='about__img-holder'>
		<div className='about__img has-cover' style={{ backgroundImage: `url(${props.image})`}} role='presentation'/>
	</div>
  )
}
