// redux/store.js
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userReducer from './reducer/userReducer'; // Ensure the path is correct
import vehicleReducer from './reducer/vehicleReducer'; // Import the vehicle reducer

const rootReducer = combineReducers({
  user: userReducer,
  vehicle: vehicleReducer, // Add the vehicle reducer to the root reducer
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
