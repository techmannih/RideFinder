import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearUser } from '../../redux/actions/userActions';

const Home = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(clearUser());
  };

  return (
    <div>
      <h1>Home</h1>
      {user ? (
        <div>
          <h2>Welcome, {user.email}</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <p>Please log in.</p>
      )}
    </div>
  );
};

export default Home;
