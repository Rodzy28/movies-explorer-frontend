import './NavTab.css'
import { Link } from 'react-router-dom';

export default function NavTab() {
  return (
    <div className='navtab'>
      <Link to='/' className='navtab__link'>
        Узнать больше
      </Link>
    </div>
  );
}