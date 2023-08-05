import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../images/header-logo.svg';

export default function Header() {
  return (
    <header className="header">
      <div className='header__container'>
        <Link to='/' className='header__logo'>
          <img src={logo} alt='Логотип' />
        </Link>
        <div className='header__links'>
          <Link to='/sign-up' className='header__link'>
            Регистрация
          </Link>
          <Link to='/sign-in' className='header__link'>
            Войти
          </Link>
        </div>
      </div>
    </header>
  );
}