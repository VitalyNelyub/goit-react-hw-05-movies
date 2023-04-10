import { useParams } from 'react-router-dom';
import fetchDetailMovie from 'Api/Detail';
import { useEffect, useState } from 'react';

export default function MovieDetails() {
  const [detailMovie, setDetailMovie] = useState(null);
  const { movieId } = useParams();
  //   console.log(movieId);

  useEffect(() => {
    console.log(detailMovie);
    if (detailMovie === null) {
      console.log(movieId);
      fetchDetailMovie(movieId).then(data => console.log(data));
      fetchDetailMovie(movieId).then(data => setDetailMovie(data.data));
    }
  });

  return (
    <div>
      {detailMovie && (
        <div>
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
      )}
    </div>
  );
}
