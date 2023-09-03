import './SearchForm.css';
import Switch from '../Switch/Switch';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function SearchForm({ searchMovies, shortMovies, setShortMovies, searchValue }) {

  const { values, handleChange, isValid, setValues } = useFormAndValidation();
  const { pathname } = useLocation();

  function handleSubmit(e) {
    e.preventDefault();
    if (!isValid) {
      console.log('Нужно ввести ключевое слово.');
    } else {
      searchMovies(values.search);
    }
  }

  useEffect(() => {
    if (pathname === '/movies') {
      setValues({ search: searchValue })
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
            value={values?.search || ''}
            onChange={handleChange} required />
          <button className='search__button' type='submit' form='search-form'>Найти</button>
        </label>
      </form>
      <Switch
        shortMovies={shortMovies}
        setShortMovies={setShortMovies}
      />
    </section>
  )
}