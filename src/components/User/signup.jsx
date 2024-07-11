import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signupUser } from "../../redux/actions/userAction";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");
  const [fullname, setFullname] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSignup = async () => {
    try {
      await dispatch(
        signupUser({
          email,
          password,
          location,
          user_info: {
            fullname,
            age: parseInt(age, 10),
            gender,
          },
        })
      );
      toast.success("Signup successful");
      router.push("/auth/login"); // Redirect to login page after signup
    } catch (error) {
      toast.error("Signup failed: " + error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl text-center font-bold text-white mb-6">
          Signup
        </h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSignup();
          }}
          className="space-y-4"
        >
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 bg-gray-700 text-white"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 bg-gray-700 text-white"
          />
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 bg-gray-700 text-white"
          />
          <input
            type="text"
            placeholder="Full Name"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 bg-gray-700 text-white"
          />
          <input
            type="number"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 bg-gray-700 text-white"
          />
          <input
            type="text"
            placeholder="Gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 bg-gray-700 text-white"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg transition duration-300 ease-in-out hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Signup
          </button>
        </form>
        <p className="text-center mt-4 text-sm">
          Already have an account?{" "}
          <a href="/auth/login" className="text-blue-500 hover:underline">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
