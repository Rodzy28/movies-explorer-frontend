import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
// import Preloader from '../Preloader/Preloader';

export default function MoviesCardList({ foundMovies }) {

  const baseUrl = 'https://api.nomoreparties.co/';

  return (
    <section className='movies'>
      <ul className='movies__list'>
        {foundMovies.map((movie) => (
          <MoviesCard key={movie.id}
            movieFoto={`${baseUrl}${movie.image.url}`}
            movieName={movie.nameRU}
            movieDuration={movie.duration}
            movieTrailerLink={movie.trailerLink}
          // onCardLike={onCardLike}
          // onCardDelete={onCardDelete}
          />
        ))}
        {/* <Preloader /> */}
      </ul>


      <button className='movies__button-more' type='button'>
        Ещё
      </button>
    </section>
  )
}