import React from 'react';
import { useSelector } from 'react-redux';

export default function Home() {
  const user = useSelector((state) => state.user.user);

  return (
    <div>
      <h1>Welcome to the Car Dealership Website</h1>
      {user ? (
        <p>Welcome, {user.name}</p>
      ) : (
        <p>Please login or sign up.</p>
      )}
    </div>
  );
}
