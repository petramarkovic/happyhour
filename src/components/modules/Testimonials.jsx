import React from 'react';
import { Icon } from '@iconify/react';
import profileImage from '../../assets/images/testimonials-img.png';

export default function Testimonials() {
  return (
	<section className='testimonials'>
		<div className='wrap'>
			<div className='testimonials__content'>
				<h2 className='h2 testimonials__title'>Šta kažu naši klijenti</h2>
				<ul className='testimonials__list'>
					<li className='testimonials__item'>
						<span className='testimonials__item-icon'>
							<span aria-hidden='true'>
								<Icon icon="gridicons:quote" />
							</span>
						</span>
						<span className='testimonials__item-text'>
							<p className='testimonials__text'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit netus, donec vulputate suspendisse.
							</p>
							<span className='testimonials__person'>
								Lorem Dolor
							</span>
						</span>
						<div className='testimonials__img-wrap'>
							<img className='testimonials__img' src={profileImage} alt='Profile'/>
						</div>
					</li>
					<li className='testimonials__item'>
						<span className='testimonials__item-icon'>
							<span aria-hidden='true'>
								<Icon icon="gridicons:quote" />
							</span>
						</span>
						<span className='testimonials__item-text'>
							<p className='testimonials__text'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit netus, donec vulputate suspendisse.
							</p>
							<span className='testimonials__person'>
								Lorem Dolor
							</span>
						</span>
						<div className='testimonials__img-wrap'>
							<img className='testimonials__img' src={profileImage} alt='Profile'/>
						</div>
					</li>
					<li className='testimonials__item'>
						<span className='testimonials__item-icon'>
							<span aria-hidden='true'>
								<Icon icon="gridicons:quote" />
							</span>
						</span>
						<span className='testimonials__item-text'>
							<p className='testimonials__text'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit netus, donec vulputate suspendisse.
							</p>
							<span className='testimonials__person'>
								Lorem Dolor
							</span>
						</span>
						<div className='testimonials__img-wrap'>
							<img className='testimonials__img' src={profileImage} alt='Profile'/>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</section>
  )
}
