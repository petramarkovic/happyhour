import React from 'react';
import { Icon } from '@iconify/react';

export default function Contact() {
  return (
	<section className='contact' data-id='contact'>
		<div className='wrap'>
			<div className='contact__content'>
				<h2 className='h2 contact__title'>Kontaktirajte nas</h2>
				<p className='text contact__text'>Ukoliko nismo odgovorili na neka vaša pitanja ili nedoumice, budite slobodni da nam pišete na mail
					<a aria-label='Happy Hour Ketering Mail' title='Happy Hour Ketering Mail' className='contact__link' href='mailto:happyhourketering@gmail.com'>
						<span aria-hidden='true'>
							<Icon icon="fluent:mail-12-filled" className='contact__icon'/>
						</span>
						happyhourketering@gmail.com
						<span className="sr-only">Email happyhourketering@gmail.com</span>
					</a>
					, da nas pozovete direktno na broj
					<a aria-label='Happy Hour Ketering Tel' title='Happy Hour Ketering Tel' className='contact__link' href='tel:381605260594'>
						<span aria-hidden='true'>
							<Icon icon="ph:phone-fill" className='contact__icon'/>
						</span>
						+381605260594
						<span className="sr-only">Broj telefona +381605260594</span>
					</a>/
					<a aria-label='Happy Hour Ketering Tel' title='Happy Hour Ketering Tel' className='contact__link' href='tel:381628244659'>
						<span aria-hidden='true'>
							<Icon icon="ph:phone-fill" className='contact__icon'/>
						</span>
						+381628244659
						<span className="sr-only">Broj telefona +381628244659</span>
					</a>
				</p>
				<p className='text contact__text'>
					... ili da nas pronađete na društvenim mrežama
				</p>
				<ul className='contact__list'>
					<li className='contact__item'>
						<a target='_blank' aria-label='Happy Hour Ketering Instagram' title='Happy Hour Ketering Instagram' href='https://www.instagram.com/happyhourketering/' className='contact__link' rel="noopener noreferrer">
							<span aria-hidden='true'>
								<Icon icon="mdi:instagram" />
							</span>
							<span className='sr-only'>Intagram Icon</span>
						</a>
					</li>
					<li className='contact__item'>
						<a target='_blank' aria-label='Happy Hour Ketering Youtube' title='Happy Hour Ketering Youtube' href='https://www.youtube.com/@drunkenmixologist' className='contact__link' rel="noopener noreferrer">
							<span aria-hidden='true'>
								<Icon icon="ri:youtube-fill" />
							</span>
							<span className='sr-only'>Youtube Icon</span>
						</a>
					</li>
					<li className='contact__item'>
						<a target='_blank' aria-label='Happy Hour Ketering TikTok' title='Happy Hour Ketering TikTok' href='https://www.tiktok.com/@igormarkovic345' className='contact__link' rel="noopener noreferrer">
							<span aria-hidden='true'>
							<Icon icon="ic:baseline-tiktok" />
							</span>
							<span className='sr-only'>TikTok Icon</span>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</section>
  )
}
