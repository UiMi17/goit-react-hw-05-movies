import axios from 'axios';

const API_KEY = '389d29db9438a2b4858231f6a2a56446'
axios.defaults.baseURL = 'https://api.themoviedb.org/3/'

const getTrending = () => {
  return axios.get(
    `trending/movie/day?api_key=${API_KEY}`
  );
};

const getMoviesByQuery = query => {
  return axios.get(
    `search/movie?api_key=${API_KEY}&query=${query}`
  );
};

const getMovieDetails = movieId => {
  return axios.get(
    `movie/${movieId}?api_key=${API_KEY}`
  );
};

const getMovieCast = movieId => {
  return axios.get(
    `movie/${movieId}/credits?api_key=${API_KEY}`
  );
};

const getMovieReviews = movieId => {
  return axios.get(
    `movie//${movieId}/reviews?api_key=${API_KEY}`
  );
};

const moviedbAPI = {
  getTrending,
  getMoviesByQuery,
  getMovieDetails,
  getMovieCast,
  getMovieReviews,
};

export default moviedbAPI;
