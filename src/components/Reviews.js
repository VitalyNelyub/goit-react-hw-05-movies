import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchReviews from 'Api/ReviewsApi';
import css from './Module.css/Reviews.module.css';

export default function Reviews() {
  const [dataReviews, setDataReviews] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    if (dataReviews === null) {
      fetchReviews(movieId).then(data => {
        if (data.data.results.length !==0)
          setDataReviews(data.data.results[0].content);
      });
    }
  }, [dataReviews, movieId]);

  return (
    <>
      <h1>Reviews</h1>
      <p className={css.reviews__text}>
        {dataReviews ? dataReviews : 'SORRY, NO MORE INFORMATION'}
      </p>
    </>
  );
}
