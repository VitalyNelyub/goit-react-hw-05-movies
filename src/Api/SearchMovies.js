import axios from "axios";

export default async function searchMovies(query) {
    const mostPopular = await  axios
      .get(`https://api.themoviedb.org/3/search/movie?api_key=963109e7e79ebe88fb21387185fe2d50&language=en-US&page=1&include_adult=false&query=${query}`)
   return mostPopular
}
