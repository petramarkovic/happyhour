import React from 'react'

export default function Button(props) {
  return (
	<button type={`${props.type ? props.type : 'button'}`} className={`btn ${props.className ? props.className : ''}`} onClick={props.onClickHandler} aria-label={props.text} data-id={`${props.dataId ? props.dataId : ''}`}>
		{props.text}
		{props.children}
	</button>
  )
}
