// redux/actions/dealsAction.js
import { API_URL } from "../constants"; // Adjust path to constants file

export const FETCH_DEALS_BY_VEHICLE_ID = "FETCH_DEALS_BY_VEHICLE_ID";

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
    // Handle error gracefully, e.g., show toast notification
  }
};
