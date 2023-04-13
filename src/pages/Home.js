import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import fetchMostPopolarMovies from 'Api/Popular';
import css from './Module.css/Home.module.css';

export default function Home() {
  const [mostPopularMovies, setMostPopularMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    if (mostPopularMovies.length < 1) {
      fetchMostPopolarMovies().then(data =>
        setMostPopularMovies(data.data.results)
      );
    }
  }, [mostPopularMovies]);

  return (
    <ul className={css.film_list}>
      <h1 className={css.list__title}>Most popular movies of the last day</h1>
      {mostPopularMovies.map(movie => (
        <Link
          state={{ from: location }}
          key={movie.id}
          to={`/movies/${movie.id}`}
        >
          <li className={css.list__item}>{movie.title}</li>
        </Link>
      ))}
    </ul>
  );
}

