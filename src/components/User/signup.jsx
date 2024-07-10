import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { signupUser } from '../../redux/actions/userAction';

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");
  const [fullname, setFullname] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const dispatch = useDispatch();

  const handleSignup = () => {
    dispatch(signupUser({
      email: email,
      password,
      location: location,
      user_info: {
        fullname,
        age: parseInt(age, 10),
        gender
      }
    }));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl text-black font-bold mb-6 text-center">Signup</h1>
        <form onSubmit={(e) => { e.preventDefault(); handleSignup(); }} className="space-y-4 text-black">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
          <input
            type="text"
            placeholder="Full Name"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
          <input
            type="number"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
          <input
            type="text"
            placeholder="Gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-lg">Signup</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
