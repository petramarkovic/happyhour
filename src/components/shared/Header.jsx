import logo from '../../assets/images/logo.png';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header className="header">
			<div className="wrap">
				<div className="header__content">
					<Link className="header__home" to="/">
						<img src={logo} alt="Happy Hour Koktel Ketering Logo" className='header__logo'/>
					</Link>
					<Navigation />
				</div>
			</div>
		</header>
	)
}

export default Header;