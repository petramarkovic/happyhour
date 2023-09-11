import React from 'react';
import Slider from '../UI/Slider';

export default function AboutSingle() {
  return (
	<section className='about' data-id='about'>
	  <div className='wrap'>
		<div className='about__content'>
			<div className='about__col about__col--info'>
				<h2 className='h2 about__title'>About us</h2>
				<p className='text about__text'>Happy Hour Koktel Ketering je spoj strasti prema koktelima i bogatog iskustva u njihovoj pripremi. Naš tim čine dva iskusna barmena s dugogodišnjim stažem u ovoj veštini, a naša posvećenost koktelima je neupitna.</p>
				<p className='text about__text'>S pažnjom i ljubavlju pristupamo svakom koktelu, trudeći se da budu ne samo izvanrednog ukusa, već i pravo vizuelno remek-delo. Svaki koktel koji pripremimo je mala umetnička kreacija, spremna da očara vaše goste i doprinese čaroliji vašeg događaja.</p>
				<p className='text about__text'>Nema kompromisa kada je u pitanju kvalitet naših koktela. Posvećeni smo pružanju samo najboljeg, jer verujemo da je svaki trenutak vredan da bude ulepšan savršenim koktelom. Uz nas, vaši događaji će postati nezaboravni. Živeli! 🍹🍸</p>
			</div>
			<div className='about__col about__col--images'>
				<Slider />
			</div>
		</div>
	  </div>
	</section>
	)
}
