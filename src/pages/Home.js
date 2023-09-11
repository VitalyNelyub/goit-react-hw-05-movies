import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchMostPopolarMovies } from 'Api/ApiSearch';
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
    <>
      <h1 className={css.list__title}>Most popular movies of the last day</h1>
      <ul className={css.film_list}>
        {mostPopularMovies.map(movie => (
          <Link
            state={{ from: location }}
            key={movie.id}
            to={`/movies/${movie.id}`}
          >
            <li className={css.list__item}>
              <p className={css.list__item_title}>{movie.title}</p>
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt={'detailMovie.original_title'}
                width={250}
                height={350}
              ></img>
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
}
