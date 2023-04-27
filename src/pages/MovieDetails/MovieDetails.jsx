import { useEffect, useState } from 'react';
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import moviedbAPI from 'services/moviedbAPI';
import { StyledAdditionalInfoWrapper } from './StyledMovieDetails';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoBackBtnClick = () => {
    navigate(location.state.from.pathname + location.state.from.search);
  };

  useEffect(() => {
    moviedbAPI
      .getMovieDetails(id)
      .then(res => {
        setMovie(res.data);
      })
      .catch(error => {
        console.log(error.message);
      });
  }, [id]);

  return (
    movie && (
      <div>
        <button type="button" onClick={handleGoBackBtnClick}>
          Go back
        </button>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
            alt={`${movie.title} poster`}
          />
          <ul>
            <li>
              <h1>{movie.title}</h1>
              <p>Average vote (MovieDB): {movie.vote_average}</p>
            </li>
            <li>
              <h2>Overview</h2>
              <p>{movie.overview}</p>
            </li>
            <li>
              <h3>Genres</h3>
              <ul>
                {movie.genres.map(genre => {
                  return (
                    <li key={genre.id}>
                      <p>{genre.name}</p>
                    </li>
                  );
                })}
              </ul>
            </li>
          </ul>
        </div>
        <StyledAdditionalInfoWrapper>
          <p>Additional information</p>
          <Link to="cast" state={{ from: location.state.from }}>
            Cast
          </Link>
          <Link to="reviews" state={{ from: location.state.from }}>
            Reviews
          </Link>
          <Outlet />
        </StyledAdditionalInfoWrapper>
      </div>
    )
  );
};

export default MovieDetails;
