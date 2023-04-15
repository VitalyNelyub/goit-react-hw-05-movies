import { Outlet, useLocation, useParams } from 'react-router-dom';
import {fetchDetailMovie} from 'Api/ApiSearch';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import css from './Module.css/MovieDetails.module.css';

export default function MovieDetails() {
  const [detailMovie, setDetailMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const back = useRef(location.state?.from ?? '/');

  useEffect(() => {
    if (detailMovie === null) {
      fetchDetailMovie(movieId).then(data => setDetailMovie(data.data));
    }
  });

  return (
    <>
      <Link to={back.current}  className={css.back}>GO BACK</Link>
      {detailMovie && (
        <>
          <div className={css.details}>
            <img
              src={`https://image.tmdb.org/t/p/original/${detailMovie.poster_path}`}
              alt={'detailMovie.original_title'}
              width={300}
              height={420}
            ></img>
            <div className={css.details__info}>
              <h2 className={css.details__title}>
                {detailMovie.original_title}
              </h2>
              <h3>Release date:</h3>
              <p>{detailMovie.release_date}</p>

              <h3>Overview:</h3>
              <p>{detailMovie.overview}</p>

              <h3>Popularity:</h3>
              <p>{(detailMovie.vote_average * 10).toFixed()}%</p>

              <h3>Genres:</h3>
              <p>{detailMovie.genres[0].name}</p>
            </div>
          </div>
          <div>
            <h2 className={css.more__title}>More information about movie</h2>
            <ul className={css.more}>
              <li className={css.more__info}>
                <Link to="cast" className={css.more__info}>
                  Cast
                </Link>
              </li>
              <li className={css.more__info}>
                <Link to="reviews" className={css.more__info}>
                  Reviews
                </Link>
              </li>
            </ul>
            <Suspense fallback={<h1>Loading...</h1>}>
              <Outlet />
            </Suspense>
          </div>
        </>
      )}
    </>
  );
}
