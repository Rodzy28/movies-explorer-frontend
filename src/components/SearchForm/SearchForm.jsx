import './SearchForm.css';
import Switch from '../Switch/Switch';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import { useEffect, useState } from 'react';

export default function SearchForm({ checkLocalMovies, checked, setChecked }) {

  const { values, handleChange, isValid, setValues } = useFormAndValidation();

  function handleSubmit(e) {
    e.preventDefault();
    if (!isValid) {
      console.log('Нужно ввести ключевое слово.');
    } else {
      checkLocalMovies(values.search);
      localStorage.setItem('search', values.search);
    }
  }

  useEffect(() => {
    if (localStorage.getItem('search')) {
      setValues({ ...values, 'search': localStorage.getItem('search') });
    }
  }, [])

  return (
    <section className='search'>
      <form className='search__form' id='search-form'
        onSubmit={handleSubmit}
        noValidate>
        <label className='search__label'>
          <input className='search__input' type='text' name='search'
            placeholder='Фильм' minLength='1' maxLength='30' autoComplete='off'
            value={values.search || ''}
            onChange={handleChange} required />
          <button className='search__button' type='submit' form='search-form'>Найти</button>
        </label>
      </form>
      <Switch
        checked={checked}
        setChecked={setChecked}
      />
    </section>
  )
}