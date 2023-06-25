import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE } from './constants';
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

export const logoutRequest = () => ({
  type: LOGOUT_REQUEST,
});

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
});

export const logoutFailure = (error) => ({
  type: LOGOUT_FAILURE,
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
      if (response.status === 200) {
        
        // Đăng nhập thành công, lưu thông tin user và access token vào localStorage 
        const user =  response.data;
        localStorage.setItem('currentUser', JSON.stringify(user));
        dispatch(loginSuccess(user));
        console.log(user);
      }
      else if (response.status === 401) {
        dispatch(loginFailure(response.data));
      }
    }
    ).catch((error) => {
      dispatch(loginFailure(error.message));
    }
    );
}
};

// export const logout = () => {
//   return (dispatch) => {
//     dispatch(logoutRequest());
//     try {
//       // Gửi yêu cầu đăng xuất đến API với username và email người dùng
//       axios.post('https://localhost:7015/api/User/logout', {
//         user: {
//           username: localStorage.getItem('currentUser')[0].username,
//           email: localStorage.getItem('currentUser')[0].email,
//           },
//           });      
//       // Xóa user và access token khỏi localStorage
//       localStorage.clear();
//       dispatch(logoutSuccess());
//       window.location.assign("/");
//     } catch (error) {
//       dispatch(logoutFailure(error.message));
//     }
//   };
// }
