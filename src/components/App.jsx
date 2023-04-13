import { Route, Routes } from 'react-router-dom';
// import css from './App.module.css';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import MovieDetails from 'pages/MovieDetails';
import Layout from './Layout';
import Cast from './Cast';
import Reviews from './Reviews';


export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} >          
        </Route>
         <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route
            path="cast"
            element={<div><Cast /></div>}
          />
          <Route
            path="reviews"
            element={<div><Reviews /></div>}
          />
        </Route>           
      </Route>
    </Routes>
  );
};
