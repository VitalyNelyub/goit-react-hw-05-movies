import { useState, useEffect } from 'react';
import searchMovies from 'Api/SearchMovies';
import { useLocation, useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import css from './Module.css/Movies.module.css';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  const [searchParams, setSearchParams] = useSearchParams();
  const querySearch = searchParams.get('query') ?? '';

  useEffect(() => {
    if (querySearch)
      searchMovies(querySearch).then(data => setMovies(data.data.results));
  }, [querySearch]);

  // useEffect(() => {
  //   if (!querySearch)
  //   setSearchParams({ })
  // }, [querySearch, setSearchParams]);

  const searchFilmsOnSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: e.target[0].value });
    searchMovies(querySearch).then(data => setMovies(data.data.results));
  };
  return (
    <>
      <form onSubmit={searchFilmsOnSubmit}>
        <input
          type="text"
          className={css.input}
          // value={querySearch}
          // onChange={}
        />
        <button className={css.search__btn}>Search</button>
      </form>
      {movies.length > 0 && (
        <ul>
          {movies.map(movie => (
            <Link
              state={{ from: location }}
              key={movie.id}
              to={`/movies/${movie.id}`}
            >
              <li className={css.list__item}>{movie.title}</li>
            </Link>
          ))}
        </ul>
      )}
    </>
  );
}
