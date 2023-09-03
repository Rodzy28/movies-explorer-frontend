import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import { useEffect, useState } from 'react';

export default function SavedMovies({ savedMovies, deleteMovie }) {

  const [shortMovies, setShortMovies] = useState('');
  const [moviesToRender, setMoviesToRender] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const filteredByName = savedMovies.filter(movie => {
      if (shortMovies) {
        return (movie.nameRU.toLowerCase().includes(searchValue.toLowerCase()) || movie.nameEN.toLowerCase().includes(searchValue.toLowerCase())) && movie.duration < 40;
      } else {
        return movie.nameRU.toLowerCase().includes(searchValue.toLowerCase()) || movie.nameEN.toLowerCase().includes(searchValue.toLowerCase());
      }
    });

    setMoviesToRender(filteredByName);

  }, [shortMovies, savedMovies, searchValue])

  function searchMovies(value) {
    setSearchValue(value);
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
      />
    </main>
  )
}
