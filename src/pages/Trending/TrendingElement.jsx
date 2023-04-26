import { Link } from 'react-router-dom';

const TrendingElement = ({ movieId, title }) => {
  return (
    <li>
      <Link to={`/movies/${movieId}`}>{title}</Link>
    </li>
  );
};

export default TrendingElement;
