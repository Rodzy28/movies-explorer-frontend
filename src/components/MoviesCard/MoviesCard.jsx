import './MoviesCard.css';
import movieCard from '../../images/testMovieCard.jpg';
import { useState } from 'react';

export default function MoviesCard() {

    const [like, setLike] = useState(false);

    function handleLikeClick() {
        setLike(!like);
    }

    return (
        <li className="card">
            <img className='card__image' src={movieCard} alt="Название фильма" />
            <div className='card__about'>
                <h2 className='card__title'>Хардкод длинного название фильма, которое не вмещается в одну строку!</h2>
                <button className={`card__like ${like && 'card__like_active'}`} type='button' onClick={handleLikeClick}></button>
            </div>
            <p className='card__duration'>1ч 42м</p>
        </li>
    )
}