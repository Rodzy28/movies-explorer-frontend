import './Navigation.css';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
    return (
        <nav className='navigation'>
            <ul className='navigation__list'>
                <li className='navigation__item'><NavLink className={({isActive}) => `navigation__link ${isActive ? 'navigation__link_active' : ''}`} to='/movies'>Фильмы</NavLink></li>
                <li className='navigation__item'><NavLink className={({isActive}) => `navigation__link ${isActive ? 'navigation__link_active' : ''}`} to='/saved-movies'>Сохранённые фильмы</NavLink></li>
            </ul>
        </nav>
    );
}