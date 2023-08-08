import { Link } from 'react-router-dom';
import './Navigation.css';

export default function Navigation() {
    return (
        <div className='header__links'>
            <Link to='/sign-up' className='header__link'>Регистрация</Link>
            <Link to='/sign-in' className='header__link'>Войти</Link>
        </div>
    );
}