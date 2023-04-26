const { useEffect, useState } = require('react');
const { useParams } = require('react-router-dom');
const { default: moviedbAPI } = require('services/moviedbAPI');

const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    moviedbAPI
      .getMovieReviews(id)
      .then(res => {
        setMovieReviews(res.data.results);
      })
      .catch(error => {
        console.log(error.message);
      });
  });

  return movieReviews.length !== 0 ? (
    <ul>
      {movieReviews.map(({ id, author, content }) => {
        return (
          <li key={id}>
            <p>Author: {author}</p>
            <p>{content}</p>
          </li>
        );
      })}
    </ul>
  ) : (
    <p>We don't have any reviews for this movie.</p>
  );
};

export default Reviews;
