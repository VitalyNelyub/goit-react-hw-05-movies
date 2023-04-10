import {Route, Routes } from 'react-router-dom';
// import css from './App.module.css';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import MovieDetails from 'pages/MovieDetails';
import Layout from './Layout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />} />
        {/* <Route path="/movies/:movieId/cast" element={<div>movieId/cast</div>} /> */}
      </Route>
      {/* <Route
          path="/movies/:movieId/reviews"
          element={<div>movieId/reviews</div>}
        /> */}
    </Routes>
  );
};
