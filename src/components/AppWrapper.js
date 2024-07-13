import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { validateToken } from '../utils/auth';

const AppWrapper = ({ children }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      validateToken(dispatch);
    } else if (router.pathname !== '/auth/signup' && router.pathname !== '/auth/login' && router.pathname !== '/') {
      router.push('/auth/login');
    }
  }, [dispatch, router]);

  return children;
};

export default AppWrapper;
