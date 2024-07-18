// redux/reducers/authReducer.js
import { SET_USER, CLEAR_USER, LOGOUT_USER, SET_USER_BY_ID } from '../constants/actionTypes';

const initialState = {
  isAuthenticated: false,
  user: null,
  users: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    case CLEAR_USER:
    case LOGOUT_USER:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    case SET_USER_BY_ID:
      return {
        ...state,
        users: [...state.users, action.payload], // Add the fetched user to the users array
      };
    default:
      return state;
  }
};

export default userReducer;
