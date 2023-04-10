import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import fetchMostPopolarMovies from 'Api/Popular';

export default function Home() {
  const [mostPopularMovies, setMostPopularMovies] = useState([]);

  useEffect(() => {
    if (mostPopularMovies.length < 1) {
      fetchMostPopolarMovies().then(data =>
        setMostPopularMovies(data.data.results)
      );
    }
  }, [mostPopularMovies]);

  return (
    <ul>
      <h1>Most popular movies of the last day</h1>
      {mostPopularMovies.map(movie => (
        <Link key={movie.id} to={`/movies/${movie.id}`}>
          <li>{movie.title}</li>
        </Link>
      ))}
    </ul>
  );
}

// '/movies/:movieId'
