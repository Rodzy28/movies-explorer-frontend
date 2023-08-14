import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import NotFound from '../NotFound/NotFound';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';

export default function App() {

  const { pathname } = useLocation();
  const routeWithFooter = ['/', '/movies', '/saved-movies'];
  const routeWithHeader = ['/', '/profile', '/movies', '/saved-movies'];

  // Хардкод
  const [loggedIn, setLoggedIn] = useState(true);
  const [currentUser, setCurrentUser] = useState({
    name: 'Виталий',
    email: 'pochta@yandex.ru',
  });

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page'>
        {routeWithHeader.includes(pathname) ? <Header loggedIn={loggedIn} /> : ''}
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/sign-up' element={<Register />} />
          <Route path='/sign-in' element={<Login />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/saved-movies' element={<SavedMovies />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        {routeWithFooter.includes(pathname) ? <Footer /> : ''}
      </div>
    </CurrentUserContext.Provider>
  );
}