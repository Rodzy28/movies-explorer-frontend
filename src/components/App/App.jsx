import './App.css';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import NotFound from '../NotFound/NotFound';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import mainApi from '../../utils/MainApi';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

export default function App() {

  const { pathname } = useLocation();
  const navigate = useNavigate();
  const routeWithFooter = ['/', '/movies', '/saved-movies'];
  const routeWithHeader = ['/', '/profile', '/movies', '/saved-movies'];

  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [savedMovies, setSavedMovies] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  function handleRegister(data) {
    mainApi.registration(data)
      .then(() => {
        handleLogin(data);
      })
      .catch((err) => {
        if (err === 409) {
          setErrorMessage('Пользователь с таким email уже существует.');
        } else {
          setErrorMessage('При регистрации пользователя произошла ошибка.');
        }
        setTimeout(() => setErrorMessage(null), 2000);
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
          navigate('/movies', { replace: true });
          setErrorMessage(null);
        }
      })
      .catch((err) => {
        if (err === 401) {
          setErrorMessage('Вы ввели неправильный логин или пароль.');
        } else if (err === 400) {
          setErrorMessage('Неправильная почта или пароль.');
        } else {
          setErrorMessage('На сервере произошла ошибка.');
        }
      })
  }

  function handleUpdateUser(userData) {
    mainApi.setUserInfo(userData)
      .then(userData => {
        setCurrentUser(userData);
        setErrorMessage('Данные успешно обновлены');
        setTimeout(() => setErrorMessage(null), 2000);
      })
      .catch((err) => {
        if (err === 409) {
          setErrorMessage('Пользователь с таким email уже существует.');
        } else {
          setErrorMessage('При обновлении профиля произошла ошибка.');
        }
        setTimeout(() => setErrorMessage(null), 2000);
      })
    // .finally(() => {
    //   setIsLoading(false);
    // });
  }

  function handleLogOut() {
    mainApi.signOut()
      .then(() => {
        setLoggedIn(false);
        setCurrentUser({});
        localStorage.clear();
        navigate('/');
      })
      .catch(console.error);
  }

  useEffect(() => {
    if (loggedIn) {
      Promise.all([mainApi.getUserInfo(), mainApi.getUserMovies()])
        .then(([userData, userMovies]) => {
          setCurrentUser(userData);
          setSavedMovies(userMovies);
          setLoggedIn(true);
        })
        .catch(console.error);
    }
  }, [loggedIn]);

  useEffect(() => {
    mainApi.getUserInfo()
      .then((userData) => {
        setLoggedIn(true);
        setCurrentUser(userData);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    if (loggedIn) {
      if (pathname === '/sign-in' || pathname === '/sign-up') {
        navigate('/movies')
      }
    }
  }, [loggedIn, pathname, navigate])

  function handleSaveMovie(movieCard) {
    mainApi.addMovie(movieCard)
      .then((addMovieCard) => {
        setSavedMovies([...savedMovies, addMovieCard]);
      })
      .catch((err) => console.log(err));
  }

  function handleDeleteMovie(movieId) {
    const findMovie = savedMovies.find((movie) => movie.movieId === movieId);
    mainApi.deleteMovie(findMovie._id)
      .then(() => {
        setSavedMovies(savedMovies.filter(m => m.movieId !== movieId));
      })
      .catch((err) => console.log(err));
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page'>
        {routeWithHeader.includes(pathname) ? <Header loggedIn={loggedIn} /> : ''}
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/sign-up' element={<Register handleRegister={handleRegister} errorMessage={errorMessage} />} />
          <Route path='/sign-in' element={<Login handleLogin={handleLogin} errorMessage={errorMessage} />} />

          <Route path='/profile'
            element={
              <ProtectedRoute
                element={Profile}
                loggedIn={loggedIn}
                onUpdateUser={handleUpdateUser}
                handleLogOut={handleLogOut}
                errorMessage={errorMessage}
              />
            }
          />

          <Route path='/movies'
            element={
              <ProtectedRoute
                element={Movies}
                loggedIn={loggedIn}
                saveMovie={handleSaveMovie}
                savedMovies={savedMovies}
                deleteMovie={handleDeleteMovie}
              />
            }
          />

          <Route path='/saved-movies'
            element={
              <ProtectedRoute
                element={SavedMovies}
                loggedIn={loggedIn}
                savedMovies={savedMovies}
                deleteMovie={handleDeleteMovie}
              />
            }
          />

          <Route path='*' element={<NotFound />} />
        </Routes>
        {routeWithFooter.includes(pathname) ? <Footer /> : ''}
      </div>
    </CurrentUserContext.Provider>
  );
}