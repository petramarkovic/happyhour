import React from 'react'

export default function Image(props) {
  return (
	<div className={`image-wrap ${props.className ? props.className : ''}`}>
		<div className='image'>
			<div className='image__holder has-cover' style={{ backgroundImage: `url(${props.image})`}}></div>
		</div>
	</div>
  )
}
