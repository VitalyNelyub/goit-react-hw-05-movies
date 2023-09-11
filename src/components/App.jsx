import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import Layout from '../components/Layout';
import NotFound from 'pages/NotFound';

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Cast = lazy(() => import('../components/Cast'));
const Reviews = lazy(() => import('../components/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />}></Route>
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route
            path="cast"
            element={
              <div>
                <Cast />
              </div>
            }
          />
          <Route
            path="reviews"
            element={
              <div>
                <Reviews />
              </div>
            }
          />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
