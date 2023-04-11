import axios from 'axios';

export default async function fetchCastMovie(id) {
  const castMovies = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=963109e7e79ebe88fb21387185fe2d50&language=en-US`
  );
  return castMovies;
}

// https://api.themoviedb.org/3/movie/${id}/credits?api_key=963109e7e79ebe88fb21387185fe2d50&language=en-US
