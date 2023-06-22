import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './constants';
import axios from 'axios';

export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const loginSuccess = (user) => ({
  
  type: LOGIN_SUCCESS,
  payload: user,
  
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const getTokenInfo =  (token) => {
  return (dispatch)=>{
  
  dispatch(loginRequest());
  axios.get(
    'https://localhost:7015/api/User',
    {
      headers: {
          'Content-Type': 'application/json',
          Authorization: `bearer ${token}`
          
      },
    }).then((response) => {
      console.log(response);
      if (response.status === 200) {
        
        // Đăng nhập thành công, lưu thông tin user và access token vào localStorage 
        const user =  response.data;
        localStorage.setItem('currentUser', JSON.stringify(user));
        dispatch(loginSuccess(user));
      }
      else if (response.status === 401) {
        dispatch(loginFailure(response.data));
      }
    }
    ).catch((error) => {
      dispatch(loginFailure(error.message));
    }
    );
    //   //console.log("abc");
  //   dispatch(loginRequest());
  //   try {
  //   // const response = axios.get(
  //   //   'https://localhost:7015/api/User',
  //   //   {
  //   //     headers: {
  //   //         'Content-Type': 'application/json',
  //   //         Authorization: `bearer ${token}`
            
  //   //     },
  //   //   }
  //   // );

   
  //   // const user =  {
  //   //   username:"trang"
  //   // };
   
  //   localStorage.setItem('currentUser', JSON.stringify(user));
  //   dispatch(loginSuccess(user));
  // } catch (error) {
    
  //   dispatch(loginFailure(error.message));
  // }
}
};
