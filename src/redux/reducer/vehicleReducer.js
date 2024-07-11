// redux/reducer/vehicleReducer.js
import {
  FETCH_VEHICLES,
  FETCH_VEHICLE_BY_ID,
  CREATE_VEHICLE,
  UPDATE_VEHICLE,
  FETCH_VEHICLE_BY_USER_ID,
} from "../constants/actionTypes";

const initialState = {
  vehicles: [],
  vehicle: null,
  userVehicles: [],
};

const vehicleReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_VEHICLES:
      return { ...state, vehicles: action.payload };
    case FETCH_VEHICLE_BY_ID:
      return {
        ...state,
        vehicleDetails: action.payload,
      };
    case CREATE_VEHICLE:
      return { ...state, vehicles: [...state.vehicles, action.payload] };

    default:
      return state;
  }
};

export default vehicleReducer;
