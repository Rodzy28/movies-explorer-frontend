import './MoviesCard.css';
import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

export default function MoviesCard({ movie, saveMovie, savedMovies, deleteMovie }) {

  const baseUrl = 'https://api.nomoreparties.co';
  const { pathname } = useLocation();
  const [isSaved, setIsSaved] = useState(false);

  function handleLikeMovie() {
    if (isSaved) {
      handleUnlikeMovie();
      setIsSaved(false);
    } else {
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
  }

  function handleUnlikeMovie() {
    deleteMovie(movie.id || movie.movieId);
  }

  function durationMovie() {
    const hour = Math.floor(movie.duration / 60);
    const minutes = movie.duration % 60;
    if (hour < 1) {
      return (`${minutes}м`);
    }
    return (`${hour}ч ${minutes}м`);
  }

  useEffect(() => {
    if (savedMovies.some((savedMovie) => savedMovie.movieId === movie.id)) {
      setIsSaved(true);
    }
  }, [movie.id, savedMovies])

  return (
    <li className='card'>
      <a className='card__link' href={movie.trailerLink} target='_blank' rel='noreferrer'>
        <img className='card__image' src={pathname === '/movies' ? `${baseUrl}${movie.image.url}` : movie.image} alt={`Постер фильма ${movie.nameRU}`} />
      </a>
      <div className='card__about'>
        <h2 className='card__title'>{movie.nameRU}</h2>
        <button className={pathname === '/movies' ? `card__save ${isSaved && 'card__save_active'}` : 'card__save card__dislike'}
          type='button'
          onClick={pathname === '/movies' ? handleLikeMovie : handleUnlikeMovie}>
        </button>
      </div>
      <p className='card__duration'>{durationMovie()}</p>
    </li>
  )
}