// redux/actions/vehicleActions.js
import { toast } from "react-hot-toast";
import {
  FETCH_VEHICLES,
  FETCH_VEHICLE_BY_ID,
  CREATE_VEHICLE,
  UPDATE_VEHICLE,
  FETCH_VEHICLE_BY_USER_ID,
} from "../constants/actionTypes";

export const fetchVehicles = () => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch("/api/vehicle/get", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch vehicles");
    }
    const data = await response.json();
    console.log("all vehicle data", data);
    dispatch({ type: FETCH_VEHICLES, payload: data });
  } catch (error) {
    console.error("Fetching vehicles failed:", error);
    toast.error("Failed to fetch vehicles: " + error.message);
  }
};

export const fetchVehicleById = (id) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`/api/vehicle/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch vehicle");
    }
    const data = await response.json();
    console.log("vehicle data", data);
    dispatch({ type: FETCH_VEHICLE_BY_ID, payload: data });
  } catch (error) {
    console.error("Fetching vehicle failed:", error);
    toast.error("Failed to fetch vehicle: " + error.message);
  }
};

export const createVehicle = (vehicleData) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch("/api/vehicle/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },

      body: JSON.stringify(vehicleData),
    });
    if (!response.ok) {
      throw new Error("Failed to create vehicle");
    }
    const data = await response.json();
    dispatch({ type: CREATE_VEHICLE, payload: data });
    toast.success("Vehicle created successfully");
  } catch (error) {
    console.error("Creating vehicle failed:", error);
    toast.error("Failed to create vehicle: " + error.message);
  }
};

export const updateVehicle = (id, vehicleData) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`/api/vehicle/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(vehicleData),
    });
    if (!response.ok) {
      throw new Error("Failed to update vehicle");
    }
    dispatch({ type: UPDATE_VEHICLE, payload: vehicleData });
    toast.success("Vehicle updated successfully");
  } catch (error) {
    console.error("Updating vehicle failed:", error);
    toast.error("Failed to update vehicle: " + error.message);
  }
};

export const fetchVehicleByUserId = (userId) => async (dispatch) => {
  console.log("fetchVehicleByUserId", userId);
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`/api/vehicle/getuser/${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch vehicles by user ID");
    }
    const data = await response.json();
    console.log("vehicle data by user ID", data);
    dispatch({ type: FETCH_VEHICLE_BY_USER_ID, payload: data });
  } catch (error) {
    console.error("Fetching vehicles by user ID failed:", error);
    toast.error("Failed to fetch vehicles by user ID: " + error.message);
  }
};
