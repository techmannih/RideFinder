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
  userDeals: [],
  vehicleDeals: [],
};

const dealReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DEALS:
      return { ...state, deals: action.payload };
    case FETCH_DEAL_BY_ID:
      return { ...state, deal: action.payload };
    default:
      return state;
  }
};

export default dealReducer;
