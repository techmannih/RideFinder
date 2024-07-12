// redux/actions/userActions.js
import { SET_USER, CLEAR_USER, LOGOUT_USER } from "../constants/actionTypes";
import { toast } from "react-hot-toast";

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const clearUser = () => ({
  type: CLEAR_USER,
});

export const loginUser = (credentials) => async (dispatch) => {
  console.log("Dispatching login request with credentials:", credentials);
  try {
    const response = await fetch("/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Login error response:", errorData);
      throw new Error(errorData.msg || "Login failed");
    }

    const data = await response.json();
    console.log("Login response data:", data);

    localStorage.setItem("token", data.token);
    dispatch(setUser(data.user));
    toast.success("Login successful");
  } catch (error) {
    console.error("Login failed:", error);
    toast.error("Login failed: " + error.message);
  }
};

export const signupUser = (userData) => async (dispatch) => {
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

// Add this action for logout
export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("token");
  dispatch({ type: LOGOUT_USER });
  toast.success("Logout successful");
};

export const fetchUserProfile = () => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch("/api/user/profile", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch user profile");
    }

    const data = await response.json();
    console.log("Fetched user profile:", data);
    dispatch(setUser(data));
  } catch (error) {
    console.error("Fetching user profile failed:", error);
    toast.error("Failed to fetch user profile: " + error.message);
  }
};

export const updateUserProfile = (userData) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch("/api/user/update", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error("Failed to update user profile");
    }

    const data = await response.json();
    dispatch(setUser(data.user));
    toast.success("Profile updated successfully");
  } catch (error) {
    console.error("Updating user profile failed:", error);
    toast.error("Failed to update user profile: " + error.message);
  }
};
