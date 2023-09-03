import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useLocation } from 'react-router-dom';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { useEffect, useState } from 'react';
// import Preloader from '../Preloader/Preloader';

const LG_ROW_CARD_COUNT = 4;
const MD_ROW_CARD_COUNT = 2;
const SM_ROW_CARD_COUNT = 2;

const LG_INITIAL_CARD_COUNT = 16;
const MD_INITIAL_CARD_COUNT = 8;
const SM_INITIAL_CARD_COUNT = 5;

export default function MoviesCardList({ moviesToRender, saveMovie, savedMovies, deleteMovie }) {

  const { pathname } = useLocation();

  const whatMoviesShowing = pathname === '/movies' ? moviesToRender : savedMovies;

  const isDesktop = useMediaQuery('(min-width: 1280px)');
  const isTablet = useMediaQuery('(min-width: 768px)');

  const cardColumnCount = isDesktop
    ? LG_ROW_CARD_COUNT
    : isTablet
      ? MD_ROW_CARD_COUNT
      : SM_ROW_CARD_COUNT;

  const initialCardCount = isDesktop
    ? LG_INITIAL_CARD_COUNT
    : isTablet
      ? MD_INITIAL_CARD_COUNT
      : SM_INITIAL_CARD_COUNT;

  const [visibleCardCount, setVisibleCardCount] = useState(initialCardCount);

  const roundedVisibleCardCount = isDesktop
    ? Math.floor(visibleCardCount / cardColumnCount) * cardColumnCount
    : isTablet
      ? Math.floor(visibleCardCount / cardColumnCount) * cardColumnCount
      : Math.floor((visibleCardCount / cardColumnCount) * cardColumnCount);

  const handleClick = () => {
    calculateCardCount();
  };

  const calculateCardCount = () => {
    if (isDesktop) {
      return setVisibleCardCount(visibleCardCount + LG_ROW_CARD_COUNT);
    }

    if (isTablet) {
      return setVisibleCardCount(visibleCardCount + MD_ROW_CARD_COUNT);
    }

    setVisibleCardCount(visibleCardCount + SM_ROW_CARD_COUNT);
  };

  useEffect(() => {
    return setVisibleCardCount(initialCardCount);
  }, [moviesToRender, initialCardCount]);

  return (
    <section className='movies'>
      {whatMoviesShowing.length === 0 && <p className='movies__list-error'>Ничего не найдено</p>}
      <ul className='movies__list'>
        {pathname === '/movies'
          ?
          <>
            {whatMoviesShowing?.slice(0, roundedVisibleCardCount).map((movie) => (
              <MoviesCard
                key={movie.id || movie._id}
                movie={movie}
                saveMovie={saveMovie}
                savedMovies={savedMovies}
                deleteMovie={deleteMovie}
              />
            ))}
          </>
          :
          <>
            {whatMoviesShowing.map((movie) => (
              <MoviesCard
                key={movie.id || movie._id}
                movie={movie}
                saveMovie={saveMovie}
                savedMovies={savedMovies}
                deleteMovie={deleteMovie}
              />
            ))}
          </>
        }
        {/* <Preloader /> */}
      </ul>
      {pathname === '/movies' && whatMoviesShowing.length > roundedVisibleCardCount
        ? <button onClick={handleClick} className='movies__button-more' type='button'>
          Ещё
        </button>
        : ''}
    </section>
  )
}