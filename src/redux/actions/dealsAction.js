// redux/actions/dealActions.js
import { toast } from "react-hot-toast";
import {
  FETCH_DEALS,
  FETCH_DEAL_BY_ID,
  CREATE_DEAL,
  FETCH_DEALS_BY_USER_ID,
  FETCH_DEALS_BY_VEHICLE_ID,
} from "../constants/actionTypes";

const API_URL = "/api/deal";

export const fetchDeals = () => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`${API_URL}/get`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch deals");
    }
    const data = await response.json();
    console.log("all deal data", data);
    dispatch({ type: FETCH_DEALS, payload: data });
  } catch (error) {
    console.error("Fetching deals failed:", error);
    toast.error("Failed to fetch deals: " + error.message);
  }
};

export const fetchDealById = (id) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`${API_URL}/get/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch deal");
    }
    const data = await response.json();
    console.log("deal data", data);
    dispatch({ type: FETCH_DEAL_BY_ID, payload: data });
  } catch (error) {
    console.error("Fetching deal failed:", error);
    toast.error("Failed to fetch deal: " + error.message);
  }
};

export const createDeal = (dealData) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`${API_URL}/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(dealData),
    });
    if (!response.ok) {
      throw new Error("Failed to create deal");
    }
    const data = await response.json();
    console.log("create deal data", data);
    dispatch({ type: CREATE_DEAL, payload: data });
    toast.success("Deal created successfully");
  } catch (error) {
    console.error("Creating deal failed:", error);
    toast.error("Failed to create deal: " + error.message);
  }
};

export const fetchDealsByUserId = (userId) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`${API_URL}/user/${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch deals by user ID");
    }
    const data = await response.json();
    console.log("deals by user ID data", data);
    dispatch({ type: FETCH_DEALS_BY_USER_ID, payload: data });
  } catch (error) {
    console.error("Fetching deals by user ID failed:", error);
    toast.error("Failed to fetch deals by user ID: " + error.message);
  }
};

export const fetchDealsByVehicleId = (vehicleId) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`${API_URL}/vehicle/${vehicleId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch deals by vehicle ID");
    }
    const data = await response.json();
    console.log("deals by vehicle ID data", data);
    dispatch({ type: FETCH_DEALS_BY_VEHICLE_ID, payload: data });
  } catch (error) {
    console.error("Fetching deals by vehicle ID failed:", error);
    toast.error("Failed to fetch deals by vehicle ID: " + error.message);
  }
};
