import './App.css';
import { Routes, Route, useLocation, useNavigate, Navigate } from 'react-router-dom';
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
import moviesApi from '../../utils/MoviesApi';

export default function App() {

  const { pathname } = useLocation();
  const navigate = useNavigate();
  const routeWithFooter = ['/', '/movies', '/saved-movies'];
  const routeWithHeader = ['/', '/profile', '/movies', '/saved-movies'];

  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  // const [isLoading, setIsLoading] = useState(false);

  function handleRegister(data) {
    mainApi.registration(data)
      .then(() => {
        // setIsSuccess(true);
        navigate("/sign-in", { replace: true });
      })
      .catch((err) => {
        // setIsSuccess(false);
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
          navigate("/movies", { replace: true });
        }
      })
      .catch((err) => {
        // setIsSuccess(false);
        // setIsInfoTooltipPopupOpen(true);
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
    // setIsLoading(true);
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
        localStorage.clear();
        navigate('/', { replace: true });
      })
      .catch(console.error);
  }

  useEffect(() => {
    if (loggedIn) {
      Promise.all([mainApi.getUserInfo(), mainApi.getUserMovies()])
        .then(([userData, userMovies]) => {
          setCurrentUser(userData);
          setSavedMovies(userMovies);
        })
        .catch(console.error);
    }
  }, [loggedIn]);


  // useEffect(() => {
  //   if (loggedIn) {
  //     mainApi.getUserInfo()
  //       .then((userData) => {
  //         setCurrentUser(userData);
  //       })
  //       .catch(console.error);
  //   }
  // }, [loggedIn]);

  useEffect(() => {
    if (loggedIn) {
      if (pathname === '/sign-in' || pathname === '/sign-up') {
        navigate('/movies')
      }
    }
  }, [loggedIn, pathname, navigate])

  /////////////////////////////////////////////////////

  const [foundMovies, setFoundMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [checked, setChecked] = useState(false);
  let moviesBase = JSON.parse(localStorage.getItem('moviesBase'));

  function getApiMovies(moviesName) {
    moviesApi.getMovies()
      .then((movies) => {
        localStorage.setItem('moviesBase', JSON.stringify(movies));
        searchLocalStorage(moviesName);
      })
      .catch((err) => console.log(err));
  }

  function checkLocalMovies(moviesName) {
    if (moviesBase === null) {
      getApiMovies(moviesName);
    } else {
      searchLocalStorage(moviesName);
    }
  }

  function searchLocalStorage(moviesName) {
    if (checked) {
      setFoundMovies(JSON.parse(localStorage.getItem('moviesBase'))
        .filter(
          item => (item.nameRU.toLowerCase().includes(moviesName.toLowerCase()) || item.nameEN.toLowerCase().includes(moviesName.toLowerCase())) && (item.duration < 40)
        ));
    } else {
      setFoundMovies(JSON.parse(localStorage.getItem('moviesBase'))
        .filter(
          item => item.nameRU.toLowerCase().includes(moviesName.toLowerCase()) || item.nameEN.toLowerCase().includes(moviesName.toLowerCase()))
      )
    }
  }

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

  ////////////////////////////////////////////

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
                checkLocalMovies={checkLocalMovies}
                element={Movies}
                loggedIn={loggedIn}
                foundMovies={foundMovies}
                saveMovie={handleSaveMovie}
                savedMovies={savedMovies}
                deleteMovie={handleDeleteMovie}
                checked={checked}
                setChecked={setChecked}
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

          <Route path='*' element={loggedIn ? <Navigate to="/movies" /> : <NotFound />} />
        </Routes>
        {routeWithFooter.includes(pathname) ? <Footer /> : ''}
      </div>
    </CurrentUserContext.Provider>
  );
}