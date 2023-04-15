import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const KEY = '963109e7e79ebe88fb21387185fe2d50';

export async function fetchCastMovie(id) {
  const castMovies = await axios.get(
    `${BASE_URL}/movie/${id}/credits?api_key=${KEY}&language=en-US`
  );
  return castMovies;
}

export async function fetchDetailMovie(id) {
  const URL_DETAIL_MOVIE = `${BASE_URL}/movie/${id}?api_key=${KEY}&language=en-US`;

  const mostPopular = await axios.get(`${URL_DETAIL_MOVIE}`);
  return mostPopular;
}

export async function fetchMostPopolarMovies() {
  const mostPopular = await axios.get(
    `${BASE_URL}/trending/movie/day?api_key=${KEY}`
  );
  return mostPopular;
}

export async function fetchReviews(id) {
  const dataReviews = await axios.get(
    `${BASE_URL}/movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`
  );
  return dataReviews;
}

export async function searchMovies(query) {
  const mostPopular = await axios.get(
    `${BASE_URL}/search/movie?api_key=${KEY}&language=en-US&page=1&include_adult=false&query=${query}`
  );
  return mostPopular;
}
