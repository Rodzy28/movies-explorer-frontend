import './MoviesCard.css';
import movieCard from '../../images/testMovieCard.jpg';
import { useState } from 'react';

export default function MoviesCard() {

    const [like, setLike] = useState(false);

    function handleLikeClick() {
        setLike(!like);
    }

    // const isLiked = setLike(!like);

    return (
        <div className="movie-card">
            <img className='movie-card__image' src={movieCard} alt="Название фильма" />
            <div className='movie-card__about'>
                <h2 className='movie-card__title'>Хардкод длинного название фильма, которое не вмещается в одну строку!</h2>
                <button className={`movie-card__like ${like && 'movie-card__like_active'}`} type='button' onClick={handleLikeClick}></button>
            </div>
            <p className='movie-card__duration'>1ч 42м</p>
        </div>
    )
}