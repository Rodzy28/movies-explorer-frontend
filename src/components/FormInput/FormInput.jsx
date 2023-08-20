import './FormInput.css';
import { useLocation } from 'react-router-dom';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';

export default function FormInput({ handleRegister, handleLogin }) {

    const { pathname } = useLocation();
    const { values, handleChange, errors } = useFormAndValidation();

    function handleSubmit(e) {
        e.preventDefault();
        if (pathname === '/sign-in') {
            handleLogin(values);
        } else {
            handleRegister(values);
        }
    }

    return (
        <form className='form' id='sign-form' onSubmit={handleSubmit} noValidate>
            {pathname === '/sign-up'
                ?
                <>
                    <label className='form__label form__label-title'>Имя
                        {/* <span className='form__label-title'>Имя</span> */}
                        <input className='form__input' type='text' name='name'
                            placeholder='Введите имя' minLength='3' maxLength='30' autoComplete='off' value={values.name || ''} onChange={handleChange} />
                    </label>
                    <span className='form__input-error'>{errors.name}</span>
                </>
                : ''
            }
            <label className='form__label form__label-title'>E-mai
                {/* <span className='form__label-title'>E-mail</span> */}
                <input className='form__input' type='email' name='email'
                    placeholder='Введите E-mail' autoComplete='off' value={values.email || ''} onChange={handleChange} />
            </label>
            <span className='form__input-error'>{errors.email}</span>

            <label className='form__label form__label-title'>Пароль
                {/* <span className='form__label-title'>Пароль</span> */}
                <input className='form__input' type='password' name='password'
                    placeholder='Введите пароль' minLength='5' maxLength='15' autoComplete='off' value={values.password || ''} onChange={handleChange} />
            </label>
            <span className='form__input-error'>{errors.password}</span>
        </form>
    )
}