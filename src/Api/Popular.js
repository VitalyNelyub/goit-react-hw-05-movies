import axios from "axios";

const URL_POPULAR_MOVIES = `https://api.themoviedb.org/3/trending/movie/day?api_key=963109e7e79ebe88fb21387185fe2d50`;

export default async function fetchMostPopolarMovies() {
    const mostPopular = await  axios
      .get(`${URL_POPULAR_MOVIES}`)
   return mostPopular
}

