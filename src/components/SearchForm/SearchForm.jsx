import './SearchForm.css';
import Switch from '../Switch/Switch';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import { useEffect } from 'react';

export default function SearchForm({ getMovies, setSearchTitle }) {

  const { values, handleChange, isValid } = useFormAndValidation();

  function handleSubmit(e) {
    e.preventDefault();
    if (!isValid) {
      console.log('Нужно ввести ключевое слово.');
    } else {
      getMovies();
    }
  }

  useEffect(() => {
    setSearchTitle(values.search);
  }, [setSearchTitle, values.search])

  return (
    <section className='search'>
      <form className='search__form' id='search-form' onSubmit={handleSubmit} noValidate>
        <label className='search__label'>
          <input className='search__input' type='text' name='search'
            placeholder='Фильм' minLength='1' maxLength='30' autoComplete='off'
            values={values.search || ''}
            onChange={handleChange} required />
          <button className='search__button' type='submit' form='search-form'>Найти</button>
        </label>
      </form>
      <Switch />
    </section>
  )
}