import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import { useLocation } from 'react-router-dom';
import NotFound from '../NotFound/NotFound';
import Register from '../Register/Register';

export default function App() {

  const { pathname } = useLocation();
  const routeWithHeader = ['/'];
  const routeWithFooter = ['/'];

  return (
    <div className='page'>
      {routeWithHeader.includes(pathname) ? <Header /> : ''}
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/sign-up' element={<Register />} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
      {routeWithHeader.includes(pathname) ? <Footer /> : ''}
    </div>
  );
}