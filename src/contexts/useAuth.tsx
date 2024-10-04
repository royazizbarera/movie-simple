import axios from "axios";

import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import authController from "../controllers/authController";

interface UserProfile {
  username: string;
  email: string;
  role: "admin" | "writer" | "user";
  photoProfile?: string;
}

type UserContextType = {
  user: UserProfile | null;
  token: string | null;
  registerUser: (username: string, email: string, password: string) => void;
  loginUser: (email: string, password: string) => void;
  logoutUser: () => void;
  isLoggedIn: () => boolean;
  isAdmin: () => boolean; // Tambahkan fungsi ini untuk mengecek role admin
  isWriter: () => boolean; // Tambahkan fungsi ini untuk mengecek role writer
};

type Props = { children: React.ReactNode };

const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserProvider = ({ children }: Props) => {
  const navigate = useNavigate();
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isReady, setIsReady] = useState<boolean>(false);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");

    if (storedToken) {
      setToken(storedToken);
      axios.defaults.headers.common["Authorization"] = `Bearer ${storedToken}`;
    }
    setIsReady(true);
  }, [token]);

  const registerUser = async (
    username: string,
    email: string,
    password: string
  ) => {
    try {
      const user = await authController.signUpWithEmailAndPassword(
        username,
        email,
        password
      );

      if (user) {
        setToken(user.token);
        navigate("/");
      } else {
        throw new Error(
          "Gagal melakukan login. Periksa kembali email dan password Anda."
        );
      }
    } catch (error: any) {
      throw new Error(
        error.message || "Terjadi kesalahan saat login. Silahkan coba kembali."
      );
    }
  };

  const loginUser = async (email: string, password: string) => {
    try {
      const user = await authController.signInWithEmailAndPassword(
        email,
        password
      );
      if (user) {
        setToken(user.token);
        navigate("/");
      } else {
        throw new Error(
          "Gagal melakukan login. Periksa kembali email dan password Anda."
        );
      }
    } catch (error: any) {
      throw new Error(
        error.message || "Terjadi kesalahan saat login. Coba lagi nanti."
      );
    }
  };

  const isLoggedIn = () => {
    if(token) return true;
    return !!user;
  };

  // Fungsi untuk mengecek apakah user adalah admin
  const isAdmin = () => {
    return user?.role === "admin";
  };

  // Fungsi untuk mengecek apakah user adalah writer
  const isWriter = () => {
    return token !== null;
    return user?.role === "writer";
  };

  const logoutUser = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setToken(null);
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{
        user,
        token,
        registerUser,
        loginUser,
        logoutUser,
        isLoggedIn,
        isAdmin,
        isWriter,
      }}
    >
      {isReady && children}
    </UserContext.Provider>
  );
};

export const useAuth = () => useContext(UserContext);
