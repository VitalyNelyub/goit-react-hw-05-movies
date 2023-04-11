import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchCastMovie from 'Api/CastApi';

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
      <div>
        {dataCast.map(actor => (
          <li key={actor.id}>
            <img
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/original/${actor.profile_path}`
                  : 'https://mir-s3-cdn-cf.behance.net/projects/404/8a3e45124050039.Y3JvcCw4MDgsNjMyLDAsMA.png'
              }
              alt={actor.name}
              width={150}
              height={200}
            ></img>
            <p>{actor.name}</p>
          </li>
        ))}
      </div>
    )
  );
}
