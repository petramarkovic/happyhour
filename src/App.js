import React, { useEffect } from 'react';
import Homepage from './components/pages/Homepage';

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
		<div className="app">
			<Homepage />
		</div>
	);
}

export default App;