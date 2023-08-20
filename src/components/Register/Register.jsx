import './Register.css';
import BigBlueBtn from '../BigBlueBtn/BigBlueBtn';
import FormInput from '../FormInput/FormInput';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import { useState } from 'react';

export default function Register({ handleRegister }) {

    const [disabled, setDisabled] = useState();

    return (
        <main className='register'>
            <div className='register__container'>
                <div className='register__header'>
                    <Link className='register__logo' to='/'>
                        <img className='register__logo-size' src={logo} alt='Логотип' />
                    </Link>
                    <h1 className='register__title'>Добро пожаловать!</h1>
                </div>
                <div className='register__form'>
                    <FormInput handleRegister={handleRegister} setDisabled={setDisabled} />
                </div>
                <BigBlueBtn buttonText={'Зарегистрироваться'} idForm={'sign-form'} disabled={disabled} />
                <div className='register__links'>
                    <span className='register__text'>Уже зарегистрированы?</span>
                    <Link className='register__link' to='/sign-in'>Войти</Link>
                </div>
            </div>
        </main>
    );
}