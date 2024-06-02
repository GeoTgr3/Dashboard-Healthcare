import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './useAuth'; // Adjust the import path as needed

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();

  if (user === null) {
    return <div>Loading...</div>; // Optionally, show a loading spinner while checking authentication
  }

  if (!user) {
    return <Navigate to="/page" />;
  }

  return children;
};

export default PrivateRoute;
