import React, { useEffect, useState } from 'react';
import moviedbAPI from 'services/moviedbAPI';
import TrendingElement from './TrendingElement';

const Trending = () => {
  const [trending, setTrending] = useState([]);

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
          return <TrendingElement key={id} movieId={id} title={title} />;
        })}
      </ul>
    </>
  );
};

export default Trending;
