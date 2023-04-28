import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import moviedbAPI from 'services/moviedbAPI';

const Cast = () => {
  const [movieCast, setMovieCast] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    moviedbAPI
      .getMovieCast(id)
      .then(res => {
        setMovieCast(res.data.cast);
      })
      .catch(error => {
        console.log(error.message);
      });
  }, [id]);

  return (
    movieCast.length !== 0 && (
      <div>
        <ul>
          {movieCast.map(({ id, name, profile_path, character }) => {
            return (
              <li key={id}>
                <img
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w200/${profile_path}`
                      : 'https://i.stack.imgur.com/l60Hf.png'
                  }
                  alt={`${name}`}
                  width="200"
                  height="300"
                  loading="lazy"
                />
                <h4>{name}</h4>
                <p>Character: {character}</p>
              </li>
            );
          })}
        </ul>
      </div>
    )
  );
};

export default Cast;
