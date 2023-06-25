import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE } from './constants';
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
    case LOGOUT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUser: null,
        error: null,
      };
    case LOGOUT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};