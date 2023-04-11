import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchReviews from 'Api/ReviewsApi';

export default function Reviews() {
  const [dataReviews, setDataReviews] = useState(null);

  useEffect(() => {
    if (dataReviews === null) {
      // fetchReviews(movieId).then(data => console.log(data.data.results[0].content));
      fetchReviews(movieId).then(data =>
        setDataReviews(data.data.results[0].content)
      );
    }
  });
  const { movieId } = useParams();
  //   console.log(movieId);
  //   console.log(dataReviews);
  return (
    <>
      <h1>Reviews</h1>
      <p>{dataReviews}</p>
    </>
  );

  //   return (
  //     dataReviews && (
  //       <div>
  //         {dataReviews.map(actor => (
  //           <li key={actor.id}>
  //             <img
  //               src={`https://image.tmdb.org/t/p/original/${actor.profile_path}`}
  //               alt={actor.name} width={100} height={150}
  //             ></img>
  //             <p>{actor.name}</p>
  //           </li>
  //         ))}
  //       </div>
  //     )
  //   );
}
