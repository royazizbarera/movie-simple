import axios from "axios";
import {
  BASE_API_URL,
  CUSTOM_STATUS_CODES,
  HEADERS,
} from "../configs/constants";

class AuthController {
  signInWithEmailAndPassword = async (email: string, password: string) => {
    try {
      const resposne = await axios.post(
        `${BASE_API_URL}/user/sign-in-email`,
        {
          email,
          password,
        },
        {
          headers: HEADERS,
        }
      );

      const data = resposne.data;

      console.info(data);
      if (data.code === CUSTOM_STATUS_CODES.OK) {
        localStorage.setItem("token", data.data.token);
        return data.data;
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      throw error;
    }
  };

  signUpWithEmailAndPassword = async (
    username: string,
    email: string,
    password: string
  ) => {
    try {
      const resposne = await axios.post(
        `${BASE_API_URL}/user/sign-up-email`,
        {
          username,
          email,
          password,
        },
        {
          headers: HEADERS,
        }
      );

      const data = resposne.data;

      if (data.code === CUSTOM_STATUS_CODES.CREATED) {
        localStorage.setItem("token", data.data.token);
        return data.data;
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      throw error;
    }
  };
}

const authController = new AuthController();

export default authController;
