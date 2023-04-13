import { useState, useEffect } from 'react';
import searchMovies from 'Api/SearchMovies';
import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import css from './Module.css/Movies.module.css';

export default function Movies() {
  const [movies, setMovies] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const querySearch = searchParams.get('query') || '';

  useEffect(() => {    
    if (querySearch)
    searchMovies(querySearch).then(data => setMovies(data.data.results));
  }, [querySearch]);

  const searchFilmsOnSubmit = (e) => {
    e.preventDefault()
    setSearchParams({ query: e.target[0].value })
    searchMovies(querySearch).then(data => setMovies(data.data.results));
  };

  return (
    <>
      <form onSubmit={searchFilmsOnSubmit}>
        <input
          type="text"
          className={css.input}
        />
        <button className={css.search__btn}>
          Search
        </button>
      </form>
      {movies.length > 0 && (
        <ul>
          {movies.map(movie => (
            <Link key={movie.id} to={`/movies/${movie.id}`}>
              <li className={css.list__item}>{movie.title}</li>
            </Link>
          ))}
        </ul>
      )}
    </>
  );
}
