import './MoviesCard.css';
import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

export default function MoviesCard({ movie, saveMovie }) {

  const baseUrl = 'https://api.nomoreparties.co';
  const { pathname } = useLocation();
  const [isSaved, setIsSaved] = useState(false);

  function handleLikeMovie() {
    setIsSaved(!isSaved);
    const movieCard = {
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: `${baseUrl}${movie.image.url}`,
      trailerLink: movie.trailerLink,
      thumbnail: `${baseUrl}${movie.image.formats.thumbnail.url}`,
      movieId: movie.id,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
    };
    saveMovie(movieCard);
  }

  function durationMovie() {
    const hour = Math.floor(movie.duration / 60);
    const minutes = movie.duration % 60;
    if (hour < 1) {
      return (`${minutes}м`);
    }
    return (`${hour}ч ${minutes}м`);
  }

  return (
    <li className="card">
      <Link to={movie.trailerLink} target='_blank'>
        <img className='card__image' src={`${baseUrl}${movie.image.url}`} alt={`Постер фильма ${movie.nameRU}`} />
      </Link>
      <div className='card__about'>
        <h2 className='card__title'>{movie.nameRU}</h2>
        <button className={pathname === '/movies' ? `card__save ${isSaved && 'card__save_active'}` : 'card__save card__dislike'}
          type='button'
          onClick={handleLikeMovie}>
        </button>
      </div>
      <p className='card__duration'>{durationMovie()}</p>
    </li>
  )
}