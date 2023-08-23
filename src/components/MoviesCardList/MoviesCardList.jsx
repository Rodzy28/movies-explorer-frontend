import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
// import Preloader from '../Preloader/Preloader';
import moviesApi from '../../utils/MoviesApi';

function test() {
  if (!localStorage.getItem('moviesBase')) {
    moviesApi.getMovies()
      .then((res) => {
        localStorage.setItem('moviesBase', JSON.stringify(res));
      })
      .catch(console.error())
  } else {
    console.log('re');
  }
}

const cardd = localStorage.getItem('moviesBase');
const cards = JSON.parse(cardd);

export default function MoviesCardList() {

  return (
    <section className='movies'>
      <ul className='movies__list'>
        {cards.map((item) => (
          <MoviesCard key={item.id}
          movieFoto={item.trailerLink}
          // card={card}
          // onCardClick={onCardClick}
          // onCardLike={onCardLike}
          // onCardDelete={onCardDelete}
          />
        ))}
        {/* <Preloader /> */}
      </ul>
      <button className='movies__button-more' type='button' onClick={test}>Ещё</button>
    </section>
  )
}