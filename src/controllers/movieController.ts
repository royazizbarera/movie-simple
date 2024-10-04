import axios from "axios";

import { BASE_API_URL } from "../configs/constants";

class MovieController {
  getMovies = async (params: any) => {
    try {
      const response = await axios.get(`${BASE_API_URL}/movies`, {
        params: {
          ...params,
        },
      });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  getMovieById = async (id: string) => {
    try {
      const response = await axios.get(`${BASE_API_URL}/movies/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };
}

const movieController = new MovieController();
export default movieController;
