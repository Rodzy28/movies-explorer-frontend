import './Profile.css';
import { useContext, useState, useEffect } from 'react';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { Link } from 'react-router-dom';
import BigBlueBtn from '../BigBlueBtn/BigBlueBtn';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';

export default function Profile({ onUpdateUser, handleLogOut, errorMessage }) {

  const currentUser = useContext(CurrentUserContext);
  const { values, handleChange, isValid, setIsValid, setValues } = useFormAndValidation();

  useEffect(() => {
    setValues(currentUser);
  }, [setValues, currentUser]);

  useEffect(() => {
    if (currentUser.name === values.name && currentUser.email === values.email) {
      setIsValid(false);
    }
  })

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser(values);
  }

  useEffect(() => {
    setShowButton(false)
  }, [currentUser])

  const [showButton, setShowButton] = useState(false);
  const toggleShowButton = () => setShowButton(true);

  return (
    <main className='profile'>
      <h1 className='profile__title'>Привет, {currentUser.name}!</h1>
      <form className='profile-form' id='profile-form' onSubmit={handleSubmit} noValidate>
        <label className='profile-form__label'>
          <span className='profile-form__title'>Имя</span>
          <input className='profile-form__input' type='text' name='name'
            placeholder='Введите имя' autoComplete='off' minLength='3' maxLength='30'
            value={values.name || ''} onChange={handleChange} disabled={!showButton} required />
        </label>
        <label className='profile-form__label'>
          <span className='profile-form__title'>E-mail</span>
          <input className='profile-form__input' type='email' name='email'
            placeholder='Введите e-mail' autoComplete='off'
            value={values.email || ''} onChange={handleChange} disabled={!showButton} required />
        </label>
        <span className='profile__error'>{errorMessage}</span>
      </form>
      {!showButton
        ?
        <>
          <span className='profile-form__button' onClick={toggleShowButton}>Редактировать</span>
          <Link className='profile-form__logout' to='/' onClick={handleLogOut}>Выйти из аккаунта</Link>
        </>
        :
        <>
          <BigBlueBtn buttonText={'Сохранить'} idForm={'profile-form'} disabled={!isValid} />
        </>
      }

    </main>
  );
}