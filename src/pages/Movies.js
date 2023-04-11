import { useState } from 'react';
import searchMovies from 'Api/SearchMovies';
import { Link } from 'react-router-dom';

export default function Movies() {
  const [query, setQuery] = useState('');
  const [searchData, setSearchData] = useState(null);

  const getQuery = e => {
    // console.log(e.target.value);
    setQuery(e.target.value);
  };

  const getQueryOnSubmit = e => {
    e.preventDefault();
    // console.log(query);
    searchMovies(query).then(data => setSearchData(data.data.results));

    // setQuery('');
  };

  // console.log(searchData);   

  return (
    <>
      <form onSubmit={getQueryOnSubmit}>
        <input
          type="text"
          placeholder="Search images and photos"
          onChange={getQuery}
          value={query}
        />
        <button type="submit">
          <span>Search</span>
        </button>
      </form>
      {searchData && (
        <div>
          {searchData.map(movie => (
            <Link key={movie.id} to={`/movies/${movie.id}`}>
              <li>{movie.title}</li>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}

//  return (
//     <ul>
//       <h1>Most popular movies of the last day</h1>
//       {mostPopularMovies.map(movie => (
//         <Link key={movie.id} to={`/movies/${movie.id}`}>
//           <li>{movie.title}</li>
//         </Link>
//       ))}
//     </ul>
//   );
// }
