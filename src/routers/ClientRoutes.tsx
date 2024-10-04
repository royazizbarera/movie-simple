import { Route, Routes } from "react-router-dom";
import DetailMovie from "../views/pages/DetailMovie";
import Home from "../views/pages/Home";
import Movies from "../views/pages/Movies";
import UserProfilePage from "../views/pages/UserProfilePage";
import SignInPage from "../views/pages/SignInPage";
import SignUpPage from "../views/pages/SignUpPage";
import ProtectedRoute from "./ProtectedRoutes";

export default function ClientRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/movie/:id" element={<DetailMovie />} />

      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />

      {/* User */}
      <Route
        path="/user-profile"
        element={<ProtectedRoute role="writer" element={<UserProfilePage />} />}
      />
      {/* <Route 
        path="/info" 
        element={<ProtectedRoute role="writer" element={<InfoPage />} />} 
      /> */}
    </Routes>
  );
}
