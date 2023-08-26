import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
// import Preloader from '../Preloader/Preloader';

export default function MoviesCardList({ foundMovies, saveMovie }) {

  return (
    <section className='movies'>
      <ul className='movies__list'>
        {foundMovies.map((movie) => (
          <MoviesCard key={movie.id}
            movie={movie}
            saveMovie={saveMovie}
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