import './Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import moviesApi from '../../utils/MoviesApi';
import { useEffect, useState } from 'react';

export default function Movies({ saveMovie, savedMovies, deleteMovie }) {

  const [shortMovies, setShortMovies] = useState(JSON.parse(localStorage.getItem('checkbox')));
  const [searchValue, setSearchValue] = useState(JSON.parse(localStorage.getItem('search')));
  const [moviesBase, setMoviesBase] = useState([]);
  const [moviesToRender, setMoviesToRender] = useState([]);
  const [moviesToHistory, setMoviesToHistory] = useState(false);

  function searchMovies(value) {

    setMoviesToHistory(true);
    setSearchValue(value);
    localStorage.setItem('search', JSON.stringify(value));

    if (localStorage.getItem('moviesBase')) {
      setMoviesBase(JSON.parse(localStorage.getItem('moviesBase')));
    } else {
      moviesApi.getMovies()
        .then((movies) => {
          localStorage.setItem('moviesBase', JSON.stringify(movies));
          setMoviesBase(movies);
        })
        .catch((err) => console.log(err));
    }
  }

  useEffect(() => {
    localStorage.setItem('checkbox', JSON.stringify(shortMovies));
    setShortMovies(JSON.parse(localStorage.getItem('checkbox')));
  }, [shortMovies])

  useEffect(() => {
    if (localStorage.getItem('moviesBase')) {
      setMoviesBase(JSON.parse(localStorage.getItem('moviesBase')));
    }
  }, [])

  useEffect(() => {
    const filteredByName = moviesBase.filter(movie => {
      if (shortMovies) {
        return (movie.nameRU.toLowerCase().includes(searchValue.toLowerCase()) || movie.nameEN.toLowerCase().includes(searchValue.toLowerCase())) && movie.duration < 40;
      } else {
        return movie.nameRU.toLowerCase().includes(searchValue.toLowerCase()) || movie.nameEN.toLowerCase().includes(searchValue.toLowerCase());
      }
    });

    if (moviesToHistory) {
      localStorage.setItem('moviesHistory', JSON.stringify(filteredByName));
    }

    setMoviesToRender(filteredByName);

  }, [moviesBase, shortMovies, searchValue, moviesToHistory])

  return (
    <main className='main'>
      <SearchForm
        searchMovies={searchMovies}
        shortMovies={shortMovies}
        setShortMovies={setShortMovies}
        searchValue={searchValue}
      />
      <MoviesCardList
        moviesToRender={moviesToRender}
        saveMovie={saveMovie}
        savedMovies={savedMovies}
        deleteMovie={deleteMovie}
      />
    </main>
  )
}