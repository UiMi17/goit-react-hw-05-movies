import React, { useEffect, useState } from 'react';
import moviedbAPI from 'services/moviedbAPI';
import { useLocation } from 'react-router-dom';
import { StyledTrendingElement, StyledLink } from './StyledTrending';

const Trending = () => {
  const [trending, setTrending] = useState([]);
  const location = useLocation();

  useEffect(() => {
    moviedbAPI
      .getTrending()
      .then(res => {
        setTrending(res.data.results);
      })
      .catch(error => {
        console.log(error.message);
      });
  }, []);
  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {trending.map(({ id, title }) => {
          return (
            <StyledTrendingElement key={id}>
              <StyledLink to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </StyledLink>
            </StyledTrendingElement>
          );
        })}
      </ul>
    </>
  );
};

export default Trending;
