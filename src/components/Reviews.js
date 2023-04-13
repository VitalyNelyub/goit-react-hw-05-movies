import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchReviews from 'Api/ReviewsApi';
import css from './Module.css/Reviews.module.css';
import { nanoid } from 'nanoid';

export default function Reviews() {
  const [dataReviews, setDataReviews] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    if (dataReviews === null) {
      fetchReviews(movieId).then(data => {
        if (data.data.results.length !== 0) setDataReviews(data.data.results);
      });
    }
  }, [dataReviews, movieId]);

  return (
    <div>
      {dataReviews ? (
        dataReviews.map(data => (
          <div key={nanoid()}>
            <h2>{data.author}</h2>
            <p className={css.reviews__text}>{data.content}</p>
          </div>
        ))
      ) : (
        <>
          <h2>NO REVIEWS</h2>
          <img
            src="https://media.istockphoto.com/id/1149317024/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D1%81%D0%BC%D0%B0%D0%B9%D0%BB%D0%B8%D0%BA-%D1%81%D0%BE-%D0%B7%D0%BD%D0%B0%D0%BA%D0%BE%D0%BC-%D0%B6%D0%B0%D0%BB%D0%BE%D1%81%D1%82%D0%B8.jpg?s=612x612&w=0&k=20&c=wcgWMyG4rO8Si64RHorEWNdcN862AdrLPeSd5o4B35M="
            alt="sorry"
            width={220}
            height={200}
          />
        </>
      )}
    </div>
  );
}
