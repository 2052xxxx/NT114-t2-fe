import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, PUT_USER_REQUEST, PUT_USER_SUCCESS, PUT_USER_FAILURE } from './constants';
const savedUser = localStorage.getItem('currentUser')
const initialState = {
  loading: false,
  currentUser:  savedUser ? JSON.parse(savedUser) : null,
  error: null,
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUser: action.payload,
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        currentUser: null,
        error: action.payload,
      };
    case PUT_USER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case PUT_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUser: action.payload,
        error: null,
      };
    case PUT_USER_FAILURE:
      return {
        ...state,
        loading: false,
        currentUser: null,
        error: action.payload,
      };
    default:
      return state;
  }
};