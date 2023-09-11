import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {fetchCastMovie} from 'Api/ApiSearch';
import css from './Module.css/Cast.module.css'

export default function Cast() {
  const [dataCast, setDataCast] = useState(null);

  useEffect(() => {
    if (dataCast === null) {
      fetchCastMovie(movieId).then(data => setDataCast(data.data.cast));
    }
  });
  const { movieId } = useParams();

  return (
    dataCast && (
      <ul className={css.actor__list}>
        {dataCast.map(actor => (
          <li key={actor.id} className={css.actor__item}>
            <img
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/original/${actor.profile_path}`
                  : 'https://static.thenounproject.com/png/5034901-200.png'
              }
              alt={actor.name}
              width={200}
              height={300}
            ></img>
            <p className={css.actor__name}>{actor.name}</p>
          </li>
        ))}
      </ul>
    )
  );
}
