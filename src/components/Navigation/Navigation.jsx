import './Navigation.css';
import { Link } from 'react-router-dom';

export default function Navigation() {
    return (
        <nav className='navigation'>
            <ul className='navigation__list'>
                <li className='navigation__item'><Link className='navigation__link' to='/movies'>Фильмы</Link></li>
                <li className='navigation__item'><Link className='navigation__link' to='/'>Сохранённые фильмы</Link></li>
            </ul>
        </nav>
    );
}