import './ProfileBtn.css'
import { Link, useLocation } from 'react-router-dom';

export default function ProfileBtn() {

  const { pathname } = useLocation();

  return (
    <Link className={`profile__button ${pathname === '/' ? 'profile__button_color_green' : ''}`} to='/profile'>
      <span>Аккаунт</span>
      <span className='profile__button-icon' />
    </Link>
  )
}