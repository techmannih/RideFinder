import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserProfileById } from '../../redux/actions/userAction';
import { useRouter } from 'next/router';

const UserProfileById = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;
  const users = useSelector((state) => state.user.users);
  const user = users[0];
  console.log(user);
  const loading = useSelector((state) => state.user.loading);

  useEffect(() => {
    if (id) {
      dispatch(fetchUserProfileById(id));
    }
  }, [dispatch, id]);

  return (
    <div>
      <h1>User Profile</h1>
      {loading ? (
        <p>Loading...</p>
      ) : user ? (
        <div>
          <p><strong>Name:</strong> {user.user_info.fullname}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Location:</strong> {user.location}</p>
          <p><strong>Gender:</strong> {user.user_info.gender}</p>
          <p><strong>Age:</strong> {user.user_info.age}</p>
        </div>
      ) : (
        <p>User not found</p>
      )}
    </div>
  );
};

export default UserProfileById;
