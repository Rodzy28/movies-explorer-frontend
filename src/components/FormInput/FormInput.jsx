import './FormInput.css';
import { useLocation } from 'react-router-dom';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import { useEffect } from 'react';

export default function FormInput({ handleRegister, handleLogin, setDisabled, errorMessage }) {

  const { pathname } = useLocation();
  const { values, handleChange, errors, isValid } = useFormAndValidation();

  function handleSubmit(e) {
    e.preventDefault();
    if (pathname === '/sign-in') {
      handleLogin(values);
    } else {
      handleRegister(values);
    }
  }

  useEffect(() => {
    if (!isValid) {
      setDisabled(true)
    } else {
      setDisabled(false)
    }
  })

  return (
    <form className='form' id='sign-form' onSubmit={handleSubmit} noValidate>
      {pathname === '/sign-up'
        ?
        <>
          <label className='form__label form__label-title'>Имя
            <input className='form__input' type='text' name='name'
              placeholder='Введите имя' minLength='3' maxLength='30' autoComplete='off' pattern='[a-zA-Zа-яА-Я\- ]{3,30}' value={values.name || ''} onChange={handleChange} required />
          </label>
          <span className='form__input-error'>{errors.name}</span>
        </>
        : ''
      }
      <label className='form__label form__label-title'>E-mail
        <input className='form__input' type='email' name='email'
          placeholder='Введите E-mail' autoComplete='off' pattern='[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9\-]+.+.[a-zA-Z]{2,4}' value={values.email || ''} onChange={handleChange} required />
      </label>
      <span className='form__input-error'>{errors.email}</span>

      <label className='form__label form__label-title'>Пароль
        <input className='form__input' type='password' name='password'
          placeholder='Введите пароль' minLength='5' maxLength='15' autoComplete='off' value={values.password || ''} onChange={handleChange} required />
      </label>
      <span className='form__input-error'>{errors.password}</span>
      <span className={pathname === '/sign-up' ? 'form__error-register' : 'form__error-login'}>{errorMessage}</span>
    </form>
  )
}