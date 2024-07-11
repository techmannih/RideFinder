import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserProfile, updateUserProfile } from '../../redux/actions/userAction';
import { useRouter } from 'next/router';

const UserProfile = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { user } = useSelector((state) => state.user);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    location: '',
    fullname: '',
    age: '',
    gender: '',
  });

  useEffect(() => {
    dispatch(fetchUserProfile());
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      setFormData({
        email: user.email || '',
        location: user.location || '',
        fullname: user.user_info?.fullname || '',
        age: user.user_info?.age || '',
        gender: user.user_info?.gender || '',
      });
    }
  }, [user]);

  const handleEditProfile = () => {
    setEditMode(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Ensure user_info is populated properly
      const updatedData = {
        email: formData.email,
        location: formData.location,
        user_info: {
          fullname: formData.fullname,
          age: formData.age,
          gender: formData.gender,
        },
      };
      await dispatch(updateUserProfile(updatedData));
      setEditMode(false);
    } catch (error) {
      console.error('Failed to update profile:', error);
    }
  };

  return (
    <div>
      <h1>User Profile</h1>
      {user ? (
        <div>
          {!editMode ? (
            <>
              <p><strong>Name:</strong> {formData.fullname}</p>
              <p><strong>Email:</strong> {formData.email}</p>
              <p><strong>Location:</strong> {formData.location}</p>
              <p><strong>Gender:</strong> {formData.gender}</p>
              <p><strong>Age:</strong> {formData.age}</p>
              <button onClick={handleEditProfile}>Edit Profile</button>
            </>
          ) : (
            <form onSubmit={handleSubmit} className='text-black'>
              <label>
                Email:
                <input type="email" name="email" value={formData.email} onChange={handleChange} disabled />
              </label>
              <label>
                Location:
                <input type="text" name="location" value={formData.location} onChange={handleChange} required />
              </label>
              <label>
                Fullname:
                <input type="text" name="fullname" value={formData.fullname} onChange={handleChange} required />
              </label>
              <label>
                Age:
                <input type="number" name="age" value={formData.age} onChange={handleChange} required />
              </label>
              <label>
                Gender:
                <input type="text" name="gender" value={formData.gender} onChange={handleChange} required />
              </label>
              <button type="submit">Save Changes</button>
            </form>
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserProfile;
