import axios from 'axios';

export default async function fetchReviews(id) {
  const dataReviews = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=963109e7e79ebe88fb21387185fe2d50&language=en-US&page=1`
  );
  return dataReviews;
}
