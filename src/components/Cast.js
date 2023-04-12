import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchCastMovie from 'Api/CastApi';
import css from './Module.css/Cast.module.css'

export default function Cast() {
  const [dataCast, setDataCast] = useState(null);

  useEffect(() => {
    if (dataCast === null) {
      //   fetchCastMovie(movieId).then(data => console.log(data.data.cast));
      fetchCastMovie(movieId).then(data => setDataCast(data.data.cast));
    }
  });
  const { movieId } = useParams();
  //   console.log(movieId);

  return (
    dataCast && (
      <ul className={css.actor__list}>
        {dataCast.map(actor => (
          <li key={actor.id} className={css.actor__item}>
            <img
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/original/${actor.profile_path}`
                  : 'https://mir-s3-cdn-cf.behance.net/projects/404/8a3e45124050039.Y3JvcCw4MDgsNjMyLDAsMA.png'
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
