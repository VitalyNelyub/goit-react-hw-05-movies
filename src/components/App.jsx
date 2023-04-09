import { NavLink, Route, Routes } from 'react-router-dom';
// import css from './App.module.css';
import Home from 'pages/Home';
import Movies from 'pages/Movies';

export const App = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<div>movieId</div>} />
        <Route path="/movies/:movieId/cast" element={<div>movieId/cast</div>} />
        <Route
          path="/movies/:movieId/reviews"
          element={<div>movieId/reviews</div>}
        />
      </Routes>
    </div>
  );
};
