// src/redux/store.js

import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userReducer from './reducer/userReducer'; // Ensure the path is correct

const rootReducer = combineReducers({
  user: userReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
