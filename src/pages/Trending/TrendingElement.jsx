import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const TrendingElement = ({ movieId, title }) => {
  return (
    <li>
      <Link to={`/movies/${movieId}`}>{title}</Link>
    </li>
  );
};

TrendingElement.propTypes = {
  movieId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default TrendingElement;
