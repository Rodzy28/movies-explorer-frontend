import MoviesCardList from '../MoviesCardList/MoviesCardList'
import SearchForm from '../SearchForm/SearchForm'

export default function SavedMovies({ savedMovies, deleteMovie }) {

  return (
    <main className='main'>
      <SearchForm />
      <MoviesCardList
        savedMovies={savedMovies}
        deleteMovie={deleteMovie}
      />
    </main>
  )
}
