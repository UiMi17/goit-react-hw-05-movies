import { Route, Routes } from 'react-router-dom';
import Layout from 'components/Layout/Layout';
import React, { Suspense } from 'react';

const Trending = React.lazy(() => import('pages/Trending/Trending'));
const Movies = React.lazy(() => import('pages/Movies/Movies'));
const MovieDetails = React.lazy(() => import('pages/MovieDetails/MovieDetails'));
const Cast = React.lazy(() => import('pages/Cast/Cast'));
const Reviews = React.lazy(() => import('pages/Reviews/Reviews'));

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
