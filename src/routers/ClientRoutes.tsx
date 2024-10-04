import { Route, Routes } from "react-router-dom";
import DetailMovie from "../views/pages/DetailMovie";
import Home from "../views/pages/Home";
import Movies from "../views/pages/Movies";
import UserProfilePage from "../views/pages/UserProfilePage";

export default function ClientRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/movie/:id" element={<DetailMovie />} />


      {/* User */}
      <Route path="/user-profile" element={<UserProfilePage />} />
    </Routes>
  );
}
