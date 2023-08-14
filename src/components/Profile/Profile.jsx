import './Profile.css';
import { useContext, useState, useEffect } from 'react';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { Link } from 'react-router-dom';
import BigBlueBtn from '../BigBlueBtn/BigBlueBtn';

export default function Profile() {

    const currentUser = useContext(CurrentUserContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        setName(currentUser.name);
        setEmail(currentUser.email);
    }, [currentUser]);


    function handleName(e) {
        setName(e.target.value);
    }

    function handleEmail(e) {
        setEmail(e.target.value);
    }

    const [showButton, setShowButton] = useState(false);
    const toggleShowButton = () => setShowButton(!showButton);

    return (
        <main className='profile'>
            <h1 className='profile__title'>Привет, {currentUser.name}!</h1>
            <form className='profile-form' id='profile-form'>
                <label className='profile-form__label'>
                    <span className='profile-form__title'>Имя</span>
                    <input className='profile-form__input' type='text' name='name'
                        placeholder='Введите имя' autoComplete='off' minLength='3' maxLength='30'
                        value={name || ''} onChange={handleName} disabled={!showButton} />
                </label>
                <label className='profile-form__label'>
                    <span className='profile-form__title'>E-mail</span>
                    <input className='profile-form__input' type='email' name='email'
                        placeholder='Введите e-mail' autoComplete='off'
                        value={email || ''} onChange={handleEmail} disabled={!showButton} />
                </label>
            </form>
            {!showButton &&
                <>
                    <span className='profile-form__button' onClick={toggleShowButton}>Редактировать</span>
                    <Link className='profile-form__logout' to='/'>Выйти из аккаунта</Link>
                </>
            }
            {showButton &&
                <>
                    <span className='profile__error'>Тут будет текст ошибки</span>
                    <BigBlueBtn buttonText={'Сохранить'} idForm={'profile-form'} />
                </>
            }

        </main>
    );
}