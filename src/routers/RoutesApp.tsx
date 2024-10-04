import { Route, Routes } from "react-router-dom";
import ErrorPage from "../views/pages/ErrorPage";
import ClientRoutes from "./ClientRoutes";
import Home from "../views/pages/Home";

export default function RoutesApp() {
  return (
    <Routes>
      {/* Admin Pages */}
      <Route index element={<Home />} />
      {/* Admin V2 Pages */}
      {/* <Route path="admin/*" element={<AdminRoutes />} /> */}

      {/* Client V1 Pages */}
      <Route path="/*" element={<ClientRoutes />} />

      {/* Error Page */}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
