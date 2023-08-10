import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';

export default function Header({ loggedIn }) {
  return (
    <header className="header">
      <div className='header__container'>
        <Link to='/' className='header__logo'>
          <img className='header__logo-size' src={logo} alt='Логотип' />
        </Link>
        {loggedIn
          ? <>
            <Navigation />
            <Link className='navigation__button' to='/profile'>
              <span>Аккаунт</span>
              <div className='navigation__button-icon' />
            </Link>
          </>
          :
          <div className='header__links'>
            <Link to='/sign-up' className='header__link'>Регистрация</Link>
            <Link to='/sign-in' className='header__link'>Войти</Link>
          </div>}
      </div>
    </header>
  );
}