import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

export default function Movies() {

    return (
        <main>
            <SearchForm />
            <MoviesCardList />
        </main>
    )
}