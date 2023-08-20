import './App.css';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
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
import mainApi from '../../utils/MainApi';

export default function App() {

  const { pathname } = useLocation();
  const navigate = useNavigate();
  const routeWithFooter = ['/', '/movies', '/saved-movies'];
  const routeWithHeader = ['/', '/profile', '/movies', '/saved-movies'];

  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [errorMessage, setErrorMessage] = useState('test');

  function handleRegister(data) {
    mainApi.registration(data)
      .then(() => {
        // setIsSuccess(true);
        navigate("/sign-in", { replace: true })
      })
      .catch((err) => {
        // setIsSuccess(false);
        console.log(err);
      })
    // .finally(() => {
    //   setIsInfoTooltipPopupOpen(true);
    // });
  }

  function handleLogin(data) {
    mainApi.login(data)
      .then((res) => {
        if (res) {
          setLoggedIn(true);
          navigate("/movies", { replace: true });
        }
      })
      .catch((err) => {
        // setIsSuccess(false);
        // setIsInfoTooltipPopupOpen(true);
        console.log(err);
      });
  }

  function handleUpdateUser(userData) {
    // setIsLoading(true);
    mainApi.setUserInfo(userData)
      .then(userData => {
        setCurrentUser(userData);
        // closeAllPopups();
      })
      .catch((err) => {
        if (err === 409) {
          setErrorMessage(':)');
        }
      })
      // .finally(() => {
      //   setIsLoading(false);
      // });
  }

  function handleLogOut() {
    mainApi.signOut()
      .then(() => {
        setLoggedIn(false);
        navigate('/', { replace: true });
      })
      .catch(console.error);
  }

  useEffect(() => {
    mainApi.getUserInfo()
      .then((userData) => {
        if (userData) {
          setCurrentUser(userData);
          setLoggedIn(true);
        }
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    if (loggedIn) {
      mainApi.getUserInfo()
        .then((userData) => {
          setCurrentUser(userData);
        })
        .catch(console.error);
    }
  }, [loggedIn]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page'>
        {routeWithHeader.includes(pathname) ? <Header loggedIn={loggedIn} /> : ''}
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/sign-up' element={<Register handleRegister={handleRegister} />} />
          <Route path='/sign-in' element={<Login handleLogin={handleLogin} />} />
          <Route path='/profile' element={<Profile onUpdateUser={handleUpdateUser} handleLogOut={handleLogOut} errorMessage={errorMessage} />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/saved-movies' element={<SavedMovies />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        {routeWithFooter.includes(pathname) ? <Footer /> : ''}
      </div>
    </CurrentUserContext.Provider>
  );
}