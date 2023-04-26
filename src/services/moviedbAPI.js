import axios from 'axios';

const getTrending = () => {
  return axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=389d29db9438a2b4858231f6a2a56446`
  );
};

const getMoviesByQuery = query => {
  return axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=389d29db9438a2b4858231f6a2a56446&query=${query}`
  );
};

const getMovieDetails = movieId => {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=389d29db9438a2b4858231f6a2a56446`
  );
};

const getMovieCast = movieId => {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=389d29db9438a2b4858231f6a2a56446`
  );
};

const getMovieReviews = movieId => {
  return axios.get(
    `https://api.themoviedb.org/3/movie//${movieId}/reviews?api_key=389d29db9438a2b4858231f6a2a56446`
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
