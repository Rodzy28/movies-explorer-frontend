import './SearchForm.css';
import Switch from '../Switch/Switch';

export default function SearchForm() {

  return (
    <section className='search'>
      <form className='search__form' id='search-form'>
        <label className='search__label'>
          <input className='search__input' type='text' name='search'
            placeholder='Фильм' minLength='2' maxLength='30' autoComplete='off'
          // required
          />
          <button className='search__button' type='submit' form='search-form'>Найти</button>
        </label>
      </form>
      <Switch />
    </section>
  )
}