import { useState } from 'react';
import moviedbAPI from 'services/moviedbAPI';
import TrendingElement from 'pages/Trending/TrendingElement';
import { Outlet } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  const handleSearchBtnClick = ev => {
    const query = ev.target.parentNode.children.search.value;

    moviedbAPI
      .getMoviesByQuery(query)
      .then(res => {
        setMovies(res.data.results);
      })
      .catch(error => {
        console.log(error.message);
      });
  };
  return (
    <>
      <div>
        <input type="text" name="search" />
        <button type="button" onClick={handleSearchBtnClick}>
          Search
        </button>
      </div>
      <ul>
        {movies.map(({ id, title }) => {
          return <TrendingElement key={id} movieId={id} title={title} />;
        })}
      </ul>
      <Outlet />
    </>
  );
};

export default Movies;
