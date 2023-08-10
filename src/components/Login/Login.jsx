import './Login.css'
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg'
import { useLocation } from 'react-router-dom';

export default function Login({ children }) {

    const { pathname } = useLocation();

    return (
        <main className='login'>
            <div className='login__container'>

                <div className='login__header'>
                    <Link className='login__logo' to='/'>
                        <img className='login__logo-size' src={logo} alt='Логотип' />
                    </Link>
                    {pathname === '/sign-in' ? <h1 className='login__title'>Рады видеть!</h1> : <h1 className='login__title'>Добро пожаловать!</h1>}
                </div>

                <form className='form'>
                    {children}
                    <label className='form__label'>
                        <span className='form__label-title'>E-mail</span>
                        <input className='form__input' type='email' name='email'
                            placeholder='Введите E-mail' autoComplete='off' required />
                    </label>
                    <span className='form__input-error'>Что-то пошло не так...</span>
                    <label className='form__label'>
                        <span className='form__label-title'>Пароль</span>
                        <input className='form__input' type='password' name='password'
                            placeholder='Введите пароль' minLength='5' maxLength='15' autoComplete='off' required />
                    </label>
                    <span className='form__input-error'>Что-то пошло не так...</span>
                </form>

                <div className={`login__button ${pathname === '/sign-in' ? 'login__button_padding' : ''}`}>
                    <button className='button_blue' type='submit'>
                        {pathname === '/sign-in' ? 'Войти' : 'Зарегистрироваться'}
                    </button>
                    <span className='login__text'>
                        {pathname === '/sign-in' ? 'Ещё не зарегистрированы?' : 'Уже зарегистрированы?'}
                    </span>
                    {pathname === '/sign-in' ? <Link className='login__link' to='/sign-up'>Регистрация</Link> : <Link className='login__link' to='/sign-in'>Войти</Link>}
                </div>
            </div>

        </main>
    );
}