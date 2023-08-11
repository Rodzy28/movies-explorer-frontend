import './Profile.css';
import { useContext, useState, useEffect } from 'react';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { Link } from 'react-router-dom';

export default function Profile() {

    const currentUser = useContext(CurrentUserContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        setName(currentUser.name);
        setEmail(currentUser.email);
    }, [currentUser]);

    function handleSubmit(e) {
        e.preventDefault();
    }

    function handleName(e) {
        setName(e.target.value);
    }

    function handleEmail(e) {
        setEmail(e.target.value);
    }

    return (
        <main className='profile'>
            <h1 className='profile__title'>Привет, {currentUser.name}!</h1>
            <form className='profile-form' id='profile-form'>
                <label className='profile-form__label'>
                    <span className='profile-form__title'>Имя</span>
                    <input className='profile-form__input' type='text' name='name'
                        placeholder='Введите имя' autoComplete='off' minLength='3' maxLength='30'
                        value={name || ''} onChange={handleName} required />
                </label>
                <span className='profile-form__input-error'></span>
                <label className='profile-form__label'>
                    <span className='profile-form__title'>E-mail</span>
                    <input className='profile-form__input' type='email' name='email'
                        placeholder='Введите e-mail' minLength='5' maxLength='15' autoComplete='off'
                        value={email || ''} onChange={handleEmail} required />
                </label>
                <span className='profile-form__input-error'>Что-то пошло не так...</span>
                <button form='profile-form' className='profile-form__button' onSubmit={handleSubmit}>Редактировать</button>
                <Link className='profile-form__logout' to='/'>Выйти из аккаунта</Link>
            </form>
        </main>
    );
}