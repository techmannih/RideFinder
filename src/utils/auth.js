// utils/auth.js
import jwt_decode from 'jwt-decode';
import { setUser, clearUser } from '../redux/actions/userAction';
import { toast } from 'react-hot-toast';

export const validateToken = (dispatch) => {
  const token = localStorage.getItem('token');
  if (token) {
    try {
      const decodedToken = jwt_decode(token);
      const currentTime = Date.now() / 1000; // Convert to seconds

      if (decodedToken.exp < currentTime) {
        // Token has expired, handle logout
        localStorage.removeItem('token');
        dispatch(clearUser());
        toast.error("Session expired, please login again.");
      } else {
        // Token is valid, set user data
        dispatch(setUser(decodedToken.user));
      }
    } catch (error) {
      console.error('Error decoding token:', error);
      localStorage.removeItem('token');
      dispatch(clearUser());
      toast.error("Session invalid, please login again.");
    }
  } else {
    // No token found, user is logged out
    dispatch(clearUser());
  }
};
