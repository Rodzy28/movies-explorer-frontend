import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';

export default function Header() {
  return (
    <header className="header">
      <div className='header__container'>
        <Link to='/' className='header__logo'>
          <img className='header__logo-size' src={logo} alt='Логотип' />
        </Link>
        <Navigation />
      </div>
    </header>
  );
}