import React, { useEffect } from 'react';
import Button from '../UI/Button';
import List from '../UI/List';
import Image from '../UI/Image';

import bannerImageOne from '../../assets/images/banner-img-1.png';
import bannerImageTwo from '../../assets/images/banner-img-2.png';

export default function Offers() {
	useEffect(() => {
		const tabs = document.querySelectorAll('.js-tab');
		const tabBtns = document.querySelectorAll('.js-tab-btn');
		tabs.forEach((tab, index) => {
			if (index === 0) {
				tab.classList.add('tab--active');
			}
		});
		tabBtns.forEach((btn, index) => {
			if (index === 0) {
				btn.classList.add('tab__btn--active');
			}
		});
	}, []);

	const changeTabHandler = (e) => {
		const clicked = e.target;
		const id = +clicked.getAttribute('data-id');
		const tabs = document.querySelectorAll('.js-tab');
		const tabBtns = document.querySelectorAll('.js-tab-btn');
		tabs.forEach((tab, index) => {
			if (id === index) {
				if (tab.classList.contains('tab--active')) {
					return;
				} else {
					tabs.forEach((tab) => {
						tab.classList.remove('tab--active');
					})
					tabBtns.forEach((btn, index) => {
						btn.classList.remove('tab__btn--active');
					})
					tab.classList.add('tab--active');
					clicked.classList.add('tab__btn--active');
				}
			}
		});
	}

	const standardListItems = [
		{
			id: 0,
			text: "Lorem"
		},
		{
			id: 1,
			text: "Lorem"
		},
		{
			id: 2,
			text: "Lorem"
		}
	];

	const premiumListItems = [
		{
			id: 0,
			text: "Lorem"
		},
		{
			id: 1,
			text: "Lorem"
		},
		{
			id: 2,
			text: "Lorem"
		},
		{
			id: 3,
			text: "Lorem"
		}
	];

	const aperitivoListItems = [
		{
			id: 0,
			text: "Lorem"
		},
		{
			id: 1,
			text: "Lorem"
		},
		{
			id: 2,
			text: "Lorem"
		},
		{
			id: 3,
			text: "Lorem"
		},
		{
			id: 4,
			text: "Lorem"
		}
	];

	return (
		<section className="offers">
			<div className="wrap">
				<h2 className="h2 offers__title">Ponude</h2>
				<div className="offers__content">
					<div className="tabs">
						<div className="tabs__cta">
							<Button onClickHandler={changeTabHandler} text="Standard" className="tab__btn js-tab-btn" dataId="0"/>
							<Button onClickHandler={changeTabHandler}  text="Premium" className="tab__btn js-tab-btn" dataId="1"/>
							<Button onClickHandler={changeTabHandler}  text="Aperitivo" className="tab__btn js-tab-btn" dataId="2"/>
						</div>
						<div className="tabs__content">
							<div className="tabs__holder">
								<div className="tab js-tab">
									<p className="text tab__text">
									Lorem ipsum dolor sit amet consectetur adipiscing elit morbi pellentesque curabitur nascetur, nam lectus est sociis sapien montes dapibus dictumst cursus molestie.
									</p>
									<List items={standardListItems}/>
									<Image className='tab__img' image={bannerImageOne}/>
									<Image className='tab__img' image={bannerImageTwo}/>
								</div>
								<div className="tab js-tab">
									<p className="text tab__text">
										Lorem ipsum dolor sit amet consectetur adipiscing elit morbi pellentesque curabitur nascetur, nam lectus est sociis sapien montes dapibus dictumst cursus molestie, hendrerit mollis habitasse imperdiet nisi vehicula vivamus elementum malesuada id. Cubilia mi rutrum tristique placerat mattis pellentesque parturient montes, netus taciti habitasse justo urna venenatis pulvinar lectus, habitant morbi nascetur metus ultrices cursus accumsan.
									</p>
									<List items={premiumListItems}/>
									<Image className='tab__img' image={bannerImageOne}/>
									<Image className='tab__img' image={bannerImageTwo}/>
									<Image className='tab__img' image={bannerImageOne}/>
								</div>
								<div className="tab js-tab">
									<p className="text tab__text">
									Lorem ipsum dolor sit amet consectetur adipiscing elit morbi pellentesque.
									</p>
									<List items={aperitivoListItems}/>
									<Image className='tab__img' image={bannerImageTwo}/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
