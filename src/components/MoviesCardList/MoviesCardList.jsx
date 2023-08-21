import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
// import Preloader from '../Preloader/Preloader';

export default function MoviesCardList() {

    return (
        <section className='movies'>
            <ul className='movies__list'>
                <MoviesCard />
                {/* <Preloader /> */}
            </ul>
            <button className="movies__button-more" type="submit">Ещё</button>
        </section>
    )
}