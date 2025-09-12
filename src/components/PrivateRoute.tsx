import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
const PrivateRoute = ({ children }) => {
  const auth = useAuth();
  if (!auth.user) {
    return <Navigate to="/Signin" replace />;
  }
  return children;
};
export default PrivateRoute;