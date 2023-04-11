import { Outlet, useParams } from 'react-router-dom';
import fetchDetailMovie from 'Api/Detail';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function MovieDetails() {
  const [detailMovie, setDetailMovie] = useState(null);
  const { movieId } = useParams();
  //   console.log(movieId);

  useEffect(() => {
    // console.log(detailMovie);
    if (detailMovie === null) {
      // console.log(movieId);
      // fetchDetailMovie(movieId).then(data => console.log(data));
      fetchDetailMovie(movieId).then(data => setDetailMovie(data.data));
    }
  });

  return (
    <>
      {detailMovie && (
        <>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/original/${detailMovie.poster_path}`}
              alt={'detailMovie.original_title'} width={300} height={420}
            ></img>
            <h2>{detailMovie.original_title}</h2>
            <h3>
              Release date:
              <p>{detailMovie.release_date}</p>
            </h3>
            <h3>
              Overview:
              <p>{detailMovie.overview}</p>
            </h3>
            <h3>
              Popularity:
              <p>{detailMovie.popularity}</p>
            </h3>
          </div>
          <div>
            <h2>More information about movie</h2>
            <ul>
              <li>
                <Link to="cast">Cast</Link>
              </li>
              <li>
                <Link to="reviews">Reviews</Link>
              </li>
            </ul>
            <Outlet />
          </div>
        </>
      )}
    </>
  );
}
