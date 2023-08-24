import './Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import moviesApi from '../../utils/MoviesApi';
import { useEffect, useState } from 'react';

export default function Movies() {

  const [localMoviesBase, setLocalMoviesBase] = useState(false);
  const [searchTitle, setSearchTitle] = useState('');
  const [foundMovies, setFoundMovies] = useState([]);
  const moviesBase = JSON.parse(localStorage.getItem('moviesBase'));

  useEffect(() => {
    if (moviesBase) {
      setLocalMoviesBase(true);
    }
  }, [moviesBase, localMoviesBase])

  function getMovies() {
    !localMoviesBase &&
      moviesApi.getMovies()
        .then((moviesBase) => {
          localStorage.setItem('moviesBase', JSON.stringify(moviesBase));
          setLocalMoviesBase(true);
        })
        .catch(console.error());
    searchMovies();
  }

  function searchMovies() {
    setFoundMovies(moviesBase.filter(item => item.nameRU.toLowerCase().includes(searchTitle.toLowerCase()) || item.nameEN.toLowerCase().includes(searchTitle.toLowerCase())));
  }

  return (
    <main className="main">
      <SearchForm getMovies={getMovies} setSearchTitle={setSearchTitle} />
      <MoviesCardList foundMovies={foundMovies} />
    </main>
  )
}