import './Footer.css'
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className='footer'>
      <h3 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h3>
      <div className='footer__info'>
        <p className='footer__copyright'>&copy; 2023</p>
        <ul className='footer__links'>
          <li className='footer__cell'>
            <Link className='footer__link' to='//practicum.yandex.ru/' target='_blank'>
              Яндекс.Практикум
            </Link>
          </li>
          <li className='footer__cell'>
            <Link className='footer__link' to='//github.com' target='_blank'>
              Github
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}