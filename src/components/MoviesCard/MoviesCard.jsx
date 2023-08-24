import './MoviesCard.css';
import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

export default function MoviesCard({ movieFoto, movieName, movieDuration, movieTrailerLink }) {

  const { pathname } = useLocation();

  const [save, setsave] = useState(false);

  function handleLikeClick() {
    setsave(!save);
  }

  function durationMovie() {
    const hour = Math.floor(movieDuration / 60);
    const minutes = movieDuration % 60;
    if (hour < 1) {
      return (`${minutes}м`);
    }
    return (`${hour}ч ${minutes}м`);
  }

  return (
    <li className="card">
      <Link to={movieTrailerLink} target='_blank'>
        <img className='card__image' src={movieFoto} alt={`Постер фильма ${movieName}`} />
      </Link>
      <div className='card__about'>
        <h2 className='card__title'>{movieName}</h2>
        <button className={pathname === '/movies' ? `card__save ${save && 'card__save_active'}` : 'card__save card__dislike'} type='button' onClick={handleLikeClick}></button>
      </div>
      <p className='card__duration'>{durationMovie()}</p>
    </li>
  )
}