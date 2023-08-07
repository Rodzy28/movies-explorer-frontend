import './Portfolio.css'
import { Link } from 'react-router-dom';

export default function Portfolio() {
  return (
    <section className='portfolio'>
      <h3 className='portfolio__title'>Портфолио</h3>
      <ul className='portfolio__links'>
        <li className='portfolio__cell'>
          <Link className='portfolio__link' to='//github.com/Rodzy28/how-to-learn' target='_blank'>
            Статичный сайт
            <p className='portfolio__icon'></p>
          </Link>
        </li>
        <li className='portfolio__cell'>
          <Link className='portfolio__link' to='//rodzy28.github.io/russian-travel' target='_blank'>
            Адаптивный сайт
            <p className='portfolio__icon'></p>
          </Link>
        </li>
        <li className='portfolio__cell'>
          <Link className='portfolio__link' to='//github.com/Rodzy28/react-mesto-api-full-gha' target='_blank'>
            Одностраничное приложение
            <p className='portfolio__icon'></p>
          </Link>
        </li>
      </ul>
    </section>
  );
}