import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/pages/Homepage';
import Offerspage from './components/pages/Offerspage';
import Aboutpage from './components/pages/Aboutpage';
import Contactpage from './components/pages/Contactpage';
import ScrollToTop from './components/UI/ScrollToTop';

function App() {

	useEffect(() => {
		const init = () => {
			const html = document.querySelector('html');
			if ('ontouchstart' in window || navigator.msMaxTouchPoints > 0 || navigator.maxTouchPoints) {
				html.classList.add('touch');
			} else {
				html.classList.add('no-touch');
			}
			window.addEventListener('load', () => {
				setTimeout(() => {
					html.classList.add('loaded');
				}, 10);
			});
		}
		init();
	}, []);

	return (
		<Router>
			<ScrollToTop />
			<Routes>
				<Route path="/" exact element={<Homepage />} />
				<Route path="/offers" element={<Offerspage />} />
				<Route path="/about" element={<Aboutpage />} />
				<Route path="/contact" element={<Contactpage />} />
			</Routes>
		</Router>
	);
}

export default App;