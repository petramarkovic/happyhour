import React, { useState } from 'react';
import Button from './Button';
import TabItem from './TabItem';
import Image from './Image';

import tabsImage from '../../assets/images/cocktail-image-3.jpg';


export default function Tabs() {
	const [activeTab, setActiveTab] = useState(0);

	const handleTabClick = (index) => {
		setActiveTab(index);
	};

	const tabs = [
		{
			title: "standard",
			content: <TabItem>Naša standardna ponuda koktel keteringa donosi nezaboravno iskustvo. Uključuje 4 koktela koje će naši iskusni barmeni pripremiti, uz potpunu organizaciju događaja. Osim koktela, brinemo se o nabavci pića, dekoraciji, čašama i kompletiranju bara, pružajući vam potpun užitak i bezbrižno iskustvo. Vaši gosti će se oduševiti jedinstvenim ukusima i prelepim ambijentom, dok vi možete potpuno uživati u događaju.</TabItem>
		},
		{
			title: "premium",
			content: <TabItem>Naša premium ponuda je savršen izbor za one koji žele potpunu slobodu i luksuz u izboru koktela za svoj događaj. Ova opcija vam omogućava da birate čak i kompleksnije koktele, prilagođene vašim preferencama. Fleksibilno trajanje događaja dodaje dodatnu udobnost.

			Uz sve što smo već ponudili u našoj osnovnoj usluzi, premium ponuda donosi ekskluzivnost i personalizaciju kako bi vaša proslava bila apsolutno nezaboravna. Iskusni barmeni i kompletna organizacija će se pobrinuti da svaki detalj bude besprekoran, dok vi i vaši gosti uživate u odabranim koktelima i najboljem mogućem iskustvu.</TabItem>
		},
		{
			title: "aperitivo",
			content: <TabItem>Naša Aperitivo ponuda pruža jednostavnost i eleganciju. U okviru ove opcije, nudimo izbor od 2-3 osvežavajuća koktela baziranih na penušavom vinu, što je idealno za opuštenije i elegantnije okupljanje. 

			Osim koktela, organizacija događaja je pojednostavljena kako biste se mogli potpuno opustiti. Naša usluga će osigurati da vaša proslava bude ugodna i da svaki detalj bude pažljivo planiran. Uživajte u laganim koktelima i ugodnom ambijentu dok se opuštate s gostima.</TabItem>
		}
	];

	return (
		<section className="tabs">
			<div className="wrap">
				<h2 className="h2 tabs__title">Ponude</h2>
				<div className="tabs__content">
					<div className="tabs__wrap">
						<div className="tabs__cta">
							{tabs.map((tab, index) => {
								return <Button text={tab.title} onClickHandler={() => handleTabClick(index)} className={`tab__btn js-tab-btn ${activeTab === index ? 'tab__btn--active' : ''}`} key={index}/>
							})}
						</div>
						<div className="tabs__holder-wrap">
							<div className="tabs__holder">
								<div className="tab js-tab">
									{tabs[activeTab].content}
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="tabs__info">
					<div className="tabs__col">
						<p className='text text--sm'>Imate li želju da sami organizujete određene aspekte događaja ili želite da prepustite sve nama, mi smo spremni ispuniti vaše potrebe. Vaša odluka o količini radnih sati, broju ljudi na vašem eventu, izboru koktela i broju barmena direktno utiče na ukupnu cenu koktel keteringa. Bez obzira na vaš izbor, naš tim će se pobrinuti da svaki detalj bude pažljivo planiran i izveden tako da vaša proslava bude nezaboravna. Slobodno nas kontaktirajte kako bismo razgovarali o vašim željama i pružili vam najbolju ponudu koja će vas oduševiti.</p>
					</div>
					<div className="tabs__col">
						<Image className='tabs__image' image={tabsImage}/>
					</div>
				</div>
			</div>
		</section>
	)
}
