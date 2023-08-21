import './MoviesCard.css';
import movieCard from '../../images/testMovieCard.jpg';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function MoviesCard() {

    const { pathname } = useLocation();

    const [save, setsave] = useState(false);

    function handleLikeClick() {
        setsave(!save);
    }

    return (
        <li className="card">
            <img className='card__image' src={movieCard} alt="Название фильма" />
            <div className='card__about'>
                <h2 className='card__title'>Название фильма</h2>
                <button className={pathname === '/movies' ? `card__save ${save && 'card__save_active'}` : 'card__save card__dislike'} type='button' onClick={handleLikeClick}></button>
            </div>
            <p className='card__duration'>1ч 42м</p>
        </li>
    )
}