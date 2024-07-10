// redux/actions/userActions.js
import { SET_USER, CLEAR_USER } from "../constants/actionTypes";
import { toast } from "react-hot-toast";

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const clearUser = () => ({
  type: CLEAR_USER,
});

export const loginUser = (credentials) => async (dispatch) => {
  try {
    const response = await fetch("/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      throw new Error("Login failed");
    }

    const data = await response.json();
    dispatch(setUser(data.user));
    toast.success("Login successful");
  } catch (error) {
    console.error("Login failed:", error);
    toast.error("Login failed: " + error.message);
  }
};

export const signupUser = (userData) => async (dispatch) => {
  console.log("userdata", userData);
  try {
    const response = await fetch("/api/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error("Signup failed");
    }

    const data = await response.json();
    dispatch(setUser(data.user));
    toast.success("Signup successful");
  } catch (error) {
    console.error("Signup failed:", error);
    toast.error("Signup failed: " + error.message);
  }
};
