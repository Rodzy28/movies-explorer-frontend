import './ProfileBtn.css'
import { Link } from 'react-router-dom';


export default function ProfileBtn() {
    return (
        <Link className='profile__button' to='/profile'>
            <span>Аккаунт</span>
            <span className='profile__button-icon' />
        </Link>
    )
}