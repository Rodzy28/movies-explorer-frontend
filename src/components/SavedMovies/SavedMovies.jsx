import MoviesCardList from '../MoviesCardList/MoviesCardList'
import SearchForm from '../SearchForm/SearchForm'

export default function SavedMovies({ savedMovies, deleteMovie, checked, setChecked }) {

  return (
    <main className='main'>
      <SearchForm
        checked={checked}
        setChecked={setChecked}
      />
      <MoviesCardList
        savedMovies={savedMovies}
        deleteMovie={deleteMovie}
      />
    </main>
  )
}
