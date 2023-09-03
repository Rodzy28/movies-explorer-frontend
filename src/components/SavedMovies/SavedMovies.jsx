import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import { useEffect, useState } from 'react';

export default function SavedMovies({ savedMovies, deleteMovie }) {

  const [shortMovies, setShortMovies] = useState('');
  const [moviesToRender, setMoviesToRender] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const filteredByName = savedMovies.filter(movie => {
      if (shortMovies) {
        return (movie.nameRU.toLowerCase().includes(searchValue.toLowerCase()) || movie.nameEN.toLowerCase().includes(searchValue.toLowerCase())) && movie.duration < 40;
      } else {
        return movie.nameRU.toLowerCase().includes(searchValue.toLowerCase()) || movie.nameEN.toLowerCase().includes(searchValue.toLowerCase());
      }
    });

    if (filteredByName.length === 0) {
      setNotFound(true);
    }

    setMoviesToRender(filteredByName);
    setIsLoading(false);
  }, [shortMovies, savedMovies, searchValue])

  function searchMovies(value) {
    setSearchValue(value);
    setIsLoading(true);
  }

  return (
    <main className='main'>
      <SearchForm
        shortMovies={shortMovies}
        setShortMovies={setShortMovies}
        searchMovies={searchMovies}
        searchValue={searchValue}
      />
      <MoviesCardList
        savedMovies={moviesToRender}
        deleteMovie={deleteMovie}
        isLoading={isLoading}
        notFound={notFound}
      />
    </main>
  )
}
