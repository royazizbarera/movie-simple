import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/useAuth";

type ProtectedRouteProps = {
  element: React.ReactNode;
  role?: 'admin' | 'writer'; // Role yang dibutuhkan untuk mengakses halaman
};

const ProtectedRoute = ({ element, role }: ProtectedRouteProps) => {
  const { isLoggedIn, isAdmin, isWriter } = useAuth();
  const location = useLocation();

  // Jika pengguna tidak login, redirect ke halaman login
  if (!isLoggedIn()) {
    return <Navigate to="/sign-in" state={{ from: location }} replace />;
  }

  // Jika role diatur, lakukan pengecekan role
  if (role) {
    if (role === 'admin' && !isAdmin()) {
      return <Navigate to="/admin/sign-in" replace />;
    }

    if (role === 'writer' && !isWriter()) {
      return <Navigate to="/sign-in" replace />;
    }
  }

  // Jika login dan memiliki peran yang sesuai, render element
  return <>{element}</>;
};

export default ProtectedRoute;
