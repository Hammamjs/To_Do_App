import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isAuthenticated } from '../../app/features/AuthSlice';

import React from 'react';

export const RequireAuth = () => {
  const authenticated = useSelector(isAuthenticated);
  const location = useLocation();
  return authenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/signin" state={{ from: location }} replace />
  );
};

export default RequireAuth;
