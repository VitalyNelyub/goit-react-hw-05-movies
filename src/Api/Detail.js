import axios from 'axios';

export default async function fetchDetailMovie(id) {
  const URL_DETAIL_MOVIE = `https://api.themoviedb.org/3/movie/${id}?api_key=963109e7e79ebe88fb21387185fe2d50&language=en-US`;

  const mostPopular = await axios.get(`${URL_DETAIL_MOVIE}`);
  return mostPopular;
}
