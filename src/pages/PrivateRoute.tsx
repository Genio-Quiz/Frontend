import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../contexts/Auth/useAuth';
const PrivateRoute = ({ children }: {children: ReactNode}) => {
  const auth = useAuth();
  if (!auth.user) {
    return <Navigate to="/Signin" replace />;
  }
  return children;
};
export default PrivateRoute;