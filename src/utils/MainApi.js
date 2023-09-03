class MainApi {
  constructor(options) {
    this._url = options.baseUrl;
    this._headers = options.headers;
  }

  _handlerServerResponse(res) {
    return res.ok ? res.json() : Promise.reject(res.status);
  }

  _request(url, options) {
    return fetch(url, options).then(this._handlerServerResponse);
  }

  registration(data) {
    return this._request(`${this._url}/signup`, {
      method: 'POST',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        password: data.password
      })
    });
  }

  login(data) {
    return this._request(`${this._url}/signin`, {
      method: 'POST',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({
        email: data.email,
        password: data.password
      })
    });
  }

  getUserInfo() {
    return this._request(`${this._url}/users/me`, {
      method: 'GET',
      credentials: 'include',
      headers: this._headers,
    });
  }

  setUserInfo(data) {
    return this._request(`${this._url}/users/me`, {
      method: 'PATCH',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        email: data.email
      })
    });
  }

  signOut() {
    return this._request(`${this._url}/signout`, {
      method: 'POST',
      credentials: 'include',
    });
  }

  addMovie(movieCard) {
    return this._request(`${this._url}/movies`, {
      method: 'POST',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify(movieCard)
    });
  }

  getUserMovies() {
    return this._request(`${this._url}/movies`, {
      method: 'GET',
      credentials: 'include',
      headers: this._headers,
    });
  }

  deleteMovie(movieId) {
    return this._request(`${this._url}/movies/${movieId}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: this._headers,
    });
  }
}

const mainApi = new MainApi({
  baseUrl: 'https://api.movies.rodzy28.nomoredomains.sbs',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
});
export default mainApi;
