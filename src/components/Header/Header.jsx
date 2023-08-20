import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';
import BurgerBtn from '../BurgerBtn/BurgerBtn';
import ProfileBtn from '../ProfileBtn/ProfileBtn';
import { useEffect, useState } from 'react';

export default function Header({ loggedIn }) {

  const { pathname } = useLocation();

  let windowSize;

  const WindowWidth = (() => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {

      function handleResize() {
        setWidth(window.innerWidth);
      }

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      }
    }, [setWidth])

    return width < 769;
  });

  windowSize = WindowWidth();

  return (
    <header className={`header ${pathname === '/' ? 'header_dark' : ''}`}>
      <div className='header__container'>
        <Link to='/' className='header__logo'>
          <img className='header__logo-size' src={logo} alt='Логотип' />
        </Link>
        {!loggedIn
          ?
          <div className='header__links'>
            <Link to='/sign-up' className='header__link'>Регистрация</Link>
            <Link to='/sign-in' className='header__link'>Войти</Link>
          </div>
          :
          <>
            {!windowSize ? <Navigation /> : ''}
            {!windowSize ? <ProfileBtn /> : ''}
            {windowSize ? <BurgerBtn /> : ''}
          </>
        }
      </div>
    </header>
  );
}