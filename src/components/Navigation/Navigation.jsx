import './Navigation.css';
import { NavLink, useLocation } from 'react-router-dom';

export default function Navigation() {

  const { pathname } = useLocation();

  return (
    <nav className='navigation'>
      <ul className='navigation__list'>
        <li className='navigation__item'>
          <NavLink className={({ isActive }) => `navigation__link
          ${pathname === '/' ? 'navigation__link_color_white' : ''}
          ${isActive ? 'navigation__link_active' : ''}`} to='/movies'>
            Фильмы
          </NavLink>
        </li>
        <li className='navigation__item'>
          <NavLink className={({ isActive }) => `navigation__link
          ${pathname === '/' ? 'navigation__link_color_white' : ''}
          ${isActive ? 'navigation__link_active' : ''}`} to='/saved-movies'>
            Сохранённые фильмы
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}