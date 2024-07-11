// src/components/AppWrapper.js

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { validateToken } from '../utils/auth';

const AppWrapper = ({ children }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    validateToken(dispatch);
          // Redirect to login if user is not authenticated
          const token = localStorage.getItem('token');
          if (!token) {
            router.push('/auth/login');
          }
  }, [dispatch]);

  return children;
};

export default AppWrapper;
