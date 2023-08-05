import './NavTab.css'
import { Link } from 'react-router-dom';

export default function NavTab() {
  return (
    <div className='navtab'>
      <Link to='//practicum.yandex.ru/' className='navtab__link'target='_blank'>
        Узнать больше
      </Link>
    </div>
  );
}