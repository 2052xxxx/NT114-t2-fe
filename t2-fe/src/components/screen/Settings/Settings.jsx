import React from "react";
import { Container, Col, Form, Row, Stack } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import theUser from '../UserProfile/theUser.png';
import TheName from '../Signup/TheName.png'
import { Image } from 'react-bootstrap';
import { useState } from "react";
import AdHeader from '../../admin/ad-header/adHeader';
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getTokenInfo } from "../../../redux/authActions";
import { useDispatch } from "react-redux";
import axios from "axios";
import './Settings.css'


export default function Settings() {

  const user = useSelector((state) => state.login?.currentUser);
  const dispatch = useDispatch();
  // const [values, setValues] = useState(intialValues);
  const [settingsState, setSettingsState] = useState(false);
  const [avatar, setavatar] = useState('');
  const [formPreview, setFormPreview] = useState(theUser);
  const [realname, setRealname] = useState(user[0]?.realname || '');
  const [username, setUsername] = useState(user[0]?.username ||'');
  const [bio, setBio] = useState(user[0]?.bio ||'');
  const [success, setSuccess] = useState(null);
  

  const submitHandler =  (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.set('userid', user[0]?.userid);
    formData.set('avatar', avatar);
    formData.set('username', username);
    formData.set('realname', realname);
    formData.set('bio', bio);

    // dispatch(editProfile(formData));
    try {      
        
       axios.put('https://localhost:7015/api/User/editProfile/', formData, 
      {headers: {
        'Content-Type': 'multipart/form-data'
       }
   }
      )
      .then(response => {
        console.log(response);
        if (response.status === 200) {
          localStorage.clear();
          console.log(response.data);
          // localStorage.setItem('currentUser', JSON.stringify(response.data));
          localStorage.setItem('token', response.data);
          //setSuccess(true);
          // if (response.status === 200) {
          //   // Đăng nhập thành công, lưu thông tin user và access token vào localStorage 
          //   localStorage.setItem('token', response.data);
            dispatch(getTokenInfo(response.data));
            if(localStorage.getItem('currentUser')!=null)
            {
              setSettingsState(true);
            }else
            {
              // wait for 5s
              setTimeout(() => {
                setSettingsState(true);
              }
              , 1500);
            }
           setSuccess(true);
           window.location.assign("/UserProfile");
          // }
        }
      })
      .catch(error => {
       // setSuccess(false);
        console.log(error);
        setSuccess(false);
      });

    }catch(error){
      console.log(error);
    }

  }

  const onChange = e => {
    if(e.target.name === 'avatar'){
      const reader = new FileReader();
      reader.onload = () => {
        if(reader.readyState === 2){
          setFormPreview(reader.result);
        }
      } 
      setavatar(e.target.files[0]);
      reader.readAsDataURL(e.target.files[0])
  }else{
      setavatar(e.target.value);
    }
  }
    
    return(
      <Stack gap={3}
      >
        <AdHeader/>
        <div className="page-settings">
          <h1 className="settingsTitle">Profile Settings</h1>
        </div>
        <Container>
              <Col className="stcomp">
                <div className="stcomp-components">
                  <div className="settings-user">
                    <Image className="settings-user-img" src={formPreview} alt="" roundedCircle />
                  </div>
                  <div>
                    <input type="file" accept='image/*'
                    name="avatar"
                    onChange={onChange}/>
                  </div>
                </div>

              </Col>
              <Col className="ndcomp" >
                {/* <div className="signupTitle">
                  <h1 className="CL">Profile settings</h1>
                </div> */}
                <Form className="settings-form"
                // onSubmit={handleSignUp}
                >
                    <Form.Group>
                        <Form.Label>Your name</Form.Label>
                        
                        <Form.Control placeholder="Enter name"
                          value={realname}
                          onChange={(e) => setRealname(e.target.value)}
                          // onChange={handleInputChange}
                          // className={"form-control" + applyErrorClass("realname")}
                          name="realname"
                          required/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className="">Username</Form.Label>
                        <Form.Control placeholder="Enter username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            // value={values.username}
                            // onChange={handleInputChange}
                            // className={"form-control" + applyErrorClass("username")}
                            name="username"
                            required/>
                        <Form.Text className="text-muted">
                            Your username cannot contain the following special characters: !, @, #, $, %. ^, &, *, ( , ),., =, +, ]
                        </Form.Text>
                    </Form.Group>
                    <Form.Group >
                        <Form.Label className="">New Bio</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Create a new bio"
                            value={bio}
                            onChange={(e) => setBio(e.target.value)}
                            name="bio"
                            required/>
                    </Form.Group>

                </Form>
              </Col>
        </Container>
        <div className="btnContinue">
          <button className="SW" type="submit"  onClick={submitHandler}>
              Continue
          </button>
        </div>
    </Stack>

    )
}