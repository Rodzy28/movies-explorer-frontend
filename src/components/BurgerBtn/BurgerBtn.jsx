import { useEffect, useState } from 'react'
import './BurgerBtn.css'
import { NavLink } from 'react-router-dom';
import ProfileBtn from '../ProfileBtn/ProfileBtn';

export default function BurgerBtn() {

    const [menuOpen, setMenuOpen] = useState(false);
    const showMenu = () => setMenuOpen(!menuOpen);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "unset";
    }, [menuOpen]);

    return (
        <>
            <button className={`burger ${menuOpen ? 'burger_hide' : ''}`} onClick={showMenu} />
            {menuOpen &&
                <>
                    <button className='burger__close' type='button' onClick={showMenu} />
                    <div className='burger__cover'>
                        <nav className='burger__menu'>
                            <ul className='burger__links'>
                                <li className='burger__item'>
                                    <NavLink className={({ isActive }) => `burger__link ${isActive ? 'burger__link_active' : ''}`} to='/'>Главная</NavLink>
                                </li>
                                <li className='burger__item'>
                                    <NavLink className={({ isActive }) => `burger__link ${isActive ? 'burger__link_active' : ''}`} to='/movies'>Фильмы</NavLink>
                                </li>
                                <li className='burger__item'>
                                    <NavLink className={({ isActive }) => `burger__link ${isActive ? 'burger__link_active' : ''}`} to='/saved-movies'>Сохранённые фильмы</NavLink>
                                </li>
                            </ul>
                            <ProfileBtn />
                        </nav>
                    </div>
                </>
            }
        </>
    )
}