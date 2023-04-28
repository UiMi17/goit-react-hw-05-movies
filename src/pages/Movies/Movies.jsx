import { useEffect, useState } from 'react';
import moviedbAPI from 'services/moviedbAPI';
import { useLocation, useSearchParams } from 'react-router-dom';
import {
  StyledTrendingElement,
  StyledLink,
} from 'pages/Trending/StyledTrending';
import { StyledForm, StyledInput, StyledButton } from './StyledMovies';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [searchQuery, setSearchQuery] = useSearchParams();
  const query = searchQuery.get('query');
  const location = useLocation();

  useEffect(() => {
    if (query) {
      moviedbAPI
        .getMoviesByQuery(query)
        .then(res => {
          setMovies(res.data.results);
        })
        .catch(error => {
          console.log(error.message);
        });
    }
  }, [query]);

  const handleSearchFormSubmit = ev => {
    ev.preventDefault();
    setSearchQuery({ query: ev.currentTarget.search.value });
    ev.currentTarget.reset();
  };

  const handleInputChange = ev => {
    if (ev.target) {
      setInputValue(ev.target.value.trim());
    }
  };
  return (
    <>
      <StyledForm onSubmit={handleSearchFormSubmit}>
        <StyledInput type="text" name="search" onChange={handleInputChange} />
        <StyledButton type="submit" disabled={!inputValue}>
          Search
        </StyledButton>
      </StyledForm>
      <ul>
        {movies.map(({ id, title }) => {
          return (
            <StyledTrendingElement key={id}>
              <StyledLink to={`${id}`} state={{ from: location }}>
                {title}
              </StyledLink>
            </StyledTrendingElement>
          );
        })}
      </ul>
    </>
  );
};

export default Movies;
