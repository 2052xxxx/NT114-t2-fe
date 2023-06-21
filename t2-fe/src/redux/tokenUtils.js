// tokenUtils.js
import axios from "axios";
import { loginSuccess, loginFailure } from "./authActions";
export const getTokenInfo = async (token) => {
  try {
    const response = await axios.get(
      'https://localhost:7015/api/User',
      {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `bearer ${token}`
        },
      }
    );
    return response.data;
  } catch (error) {
    
    return console.error(error);
  }
};
