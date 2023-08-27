import './Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
// import moviesApi from '../../utils/MoviesApi';
// import { useEffect, useState } from 'react';

export default function Movies({ checkLocalMovies, foundMovies, saveMovie, savedMovies, deleteMovie, checked, setChecked }) {

  return (
    <main className="main">
      <SearchForm
        checkLocalMovies={checkLocalMovies}
        checked={checked}
        setChecked={setChecked}
      />
      <MoviesCardList
        saveMovie={saveMovie}
        foundMovies={foundMovies}
        savedMovies={savedMovies}
        deleteMovie={deleteMovie}
      />
    </main>
  )
}