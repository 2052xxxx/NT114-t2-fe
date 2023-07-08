import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, PUT_USER_REQUEST, PUT_USER_SUCCESS, PUT_USER_FAILURE } from './constants';
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

export const putUserRequest = () => ({
  type: PUT_USER_REQUEST,
});

export const putUserSuccess = (user) => ({
  type: PUT_USER_SUCCESS,
  payload: user,
});

export const putUserFailure = (error) => ({
  type: PUT_USER_FAILURE,
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

export const editProfile = (user) => {
  return (dispatch) => {
    dispatch(putUserRequest());
    try {
      // Gửi yêu cầu đăng xuất đến API với username và email người dùng
      axios.put('https://localhost:7015/api/User/editProfile/'+ user[0]?.userid, user)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          localStorage.clear();
          localStorage.setItem('token', response.data);
          dispatch(putUserSuccess(response.data));
          }
        else if (response.status === 401) {
          dispatch(putUserFailure(response.data));
          console.log(response.data);
        }
      }
      )
      // Xóa user và access token khỏi localStorage
      dispatch(putUserSuccess());
    } catch (error) {
      dispatch(putUserFailure(error.message));
    }
  };
}
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
