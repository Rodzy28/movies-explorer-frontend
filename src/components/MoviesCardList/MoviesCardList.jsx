import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useLocation } from 'react-router-dom';
// import Preloader from '../Preloader/Preloader';

export default function MoviesCardList({ foundMovies, saveMovie, savedMovies, deleteMovie }) {

  const { pathname } = useLocation();

  const whatMoviesShowing = pathname === '/movies' ? foundMovies : savedMovies;


  return (
    <section className='movies'>
      <ul className='movies__list'>
        {whatMoviesShowing.map((movie) => (
          <MoviesCard
            key={movie.id || movie._id}
            movie={movie}
            saveMovie={saveMovie}
            savedMovies={savedMovies}
            deleteMovie={deleteMovie}
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