// redux/reducers/dealReducer.js

import {
    FETCH_DEALS,
    FETCH_DEAL_BY_ID,
    CREATE_DEAL,
    FETCH_DEALS_BY_USER_ID,
    FETCH_DEALS_BY_VEHICLE_ID,
  } from "../constants/actionTypes";
  
  const initialState = {
    deals: [],
    deal: null,
    userDeals: [], // Make sure userDeals are initialized correctly
    vehicleDeals: [],
  };
  
  const dealReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_DEALS:
        return { ...state, deals: action.payload };
      case FETCH_DEAL_BY_ID:
        return { ...state, deal: action.payload };
      case CREATE_DEAL:
        return { ...state, deals: [...state.deals, action.payload] };
      case FETCH_DEALS_BY_USER_ID:
        return { ...state, userDeals: action.payload }; // Update userDeals correctly
      case FETCH_DEALS_BY_VEHICLE_ID:
        return { ...state, vehicleDeals: action.payload };
      default:
        return state;
    }
  };
  
  export default dealReducer;
  