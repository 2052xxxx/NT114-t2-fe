// import React from "react";
// import './Settings.css'
// import { useState } from "react";
// import theUser from '../UserProfile/theUser.png';

// const intialValues = {
//   userid: 0,
//   username: "",
//   realname: "",
//   email: "",
//   password: "",
//   password2: "",
//   bio: "",
//   avatarName: "",
//   avatarSrc: theUser,
//   avatarFile: null,
// }



// export default function Settings() {
//   const [user, setUser] = useState(intialValues);
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setUser({ ...user, [name]: value }) 
//   }
//   return (
//     <>
//       <div className="settings-title">
//         <h1 className="lead">Settings</h1>
//       </div>
//       <form autoComplete="off" noValidate>
//         <div className="card">
//           {/* <img src={user?.avatarSrc || theUser} alt="" className="card-img-top" /> */}
//           <div className="card-body">
//           <div className="form-group">
//                 <input type="file" accept="image/*" className="form-control-file" />
//               </div>
//             {/* <div className="form-group">
//               <input placeholder="Enter username" name="username" className="form-control" 
//                 value={user.username}
//                 onChange={handleInputChange}/>
//             </div> */}
//           </div>

//         </div>
//       </form>
//     </>
//   );
// }

import axios from 'axios';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getTokenInfo } from '../../../../redux/authActions';
import { useDispatch } from 'react-redux';
import theUser from '../../UserProfile/theUser.png';
import { Image } from 'react-bootstrap';
import './Image.css';

const UploadImageForm = () => {
  const user = useSelector((state) => state.login?.currentUser);
  const [selectedImage, setSelectedImage] = useState(null);
  const [success, setSuccess] = useState(null);
  const [token, setToken] = useState(null);
  const dispatch = useDispatch();

  const showPreview = (e) => {
    if (e.target.files && e.target.files[0]) {
      let imageFile = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (x) => {
        setSelectedImage(x.target.result);
      };
      reader.readAsDataURL(imageFile);
    } else {
      setSelectedImage(null);
    }
  };

  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!selectedImage) {
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedImage);

    axios.post("https://localhost:7015/api/User/uploadImage/"+ user[0]?.userid, formData)
    .then((response) => {
      console.log(response);
      if (response.status === 200) {
        setSuccess(true);
        setToken(response.data);
        localStorage.setItem('token', response.data);
      }
      else if (response.status === 401) {
        setSuccess(false);
      }
    }
    )
  };

  useEffect(() => {
    if (success) {
      dispatch(getTokenInfo(token));
    }
  }, [dispatch, token, success]);

  // Nếu đã đăng nhập, chuyển hướng đến "/HeaderPage"
  if (success) {
    return window.location.assign("/UserProfile");
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit} className='image-form'>
        <div>
          <Image className="card-img-top" src={selectedImage || theUser} alt="" roundedCircle />
        </div>
        
        <div>
          <input type="file" accept='image/*' className="form-control-file" onChange={showPreview}/>
        </div>
        <div>
        <button type='submit'>submit</button>
        </div>
        
      </form>
    </div>

  );
};

export default UploadImageForm;
