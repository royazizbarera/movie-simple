import axios from "axios";

const options = (movie_id: string) => {
  return {
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/${movie_id}/videos`,
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNmMyOGIxMGVlZDUzNmYzYzc4MTFlMWIxNDdhYzU3YyIsIm5iZiI6MTcyNzk4OTg0MS42Mjk4NjEsInN1YiI6IjY2ZDgxMjQ1NzZiMTI5YjI2MWI4YjIzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gUNsPBra8-NWghv4eAaujSjO9V5Ox28tUVIhycjySuU",
    },
  };
};

const getTrailerMovie = async (movie_id: string) => {
  try {
    const response = await axios.request(options(movie_id));
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default getTrailerMovie;
