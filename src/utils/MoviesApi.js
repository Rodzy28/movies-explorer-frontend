class MoviesApi {
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

  getMovies() {
    return this._request(`${this._url}`, {
      method: 'GET',
      headers: this._headers,
    });
  }
}

const moviesApi = new MoviesApi({
  baseUrl: ' https://api.nomoreparties.co/beatfilm-movies',
  headers: {
    'Content-Type': 'application/json',
  }
});

export default moviesApi;
