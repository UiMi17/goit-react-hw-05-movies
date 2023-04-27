import { Route, Routes } from 'react-router-dom';
import Layout from 'components/Layout/Layout';
import React, { Suspense } from 'react';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';

const Trending = React.lazy(() => import('components/Trending/Trending'));
const Movies = React.lazy(() => import('pages/Movies/Movies'));
const MovieDetails = React.lazy(() =>
  import('pages/MovieDetails/MovieDetails')
);

const App = () => {
  return (
    <>
      <Layout />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route index element={<Trending />} />
          <Route path="*" element={<Trending />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
