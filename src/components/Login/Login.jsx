import './Login.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import BigBlueBtn from '../BigBlueBtn/BigBlueBtn';
import FormInput from '../FormInput/FormInput';

export default function Login({ handleLogin }) {

    return (
        <main className='login'>
            <div className='login__container'>
                <div className='login__header'>
                    <Link className='login__logo' to='/'>
                        <img className='login__logo-size' src={logo} alt='Логотип' />
                    </Link>
                    <h1 className='login__title'>Рады видеть!</h1>
                </div>
                <div className='login__form'>
                    <FormInput handleLogin={handleLogin} />
                </div>
                <BigBlueBtn buttonText={'Войти'} idForm={'sign-form'} />
                <div className='login__links'>
                    <span className='login__text'>Ещё не зарегистрированы?</span>
                    <Link className='login__link' to='/sign-up'>Регистрация</Link>
                </div>
            </div>

        </main>
    );
}