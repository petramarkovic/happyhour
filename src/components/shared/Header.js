import logo from '../../assets/images/logo.png';
import Navigation from './Navigation';

const Header = () => {
	return (
		<header className="header">
			<div className="wrap">
				<div className="header__content">
					<a className="header__home" href="/">
						<img src={logo} alt="Happy Hour Koktel Ketering Logo" className='header__logo'/>
					</a>
					<Navigation />
				</div>
			</div>
		</header>
	)
}

export default Header;