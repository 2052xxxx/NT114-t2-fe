import React from "react";
import Header from "../header/header";
import SubContent from "../subContent/subContent";
import { useDispatch } from 'react-redux';
import { useState, useEffect } from "react";
import { getTokenInfo } from '../../../redux/authActions';

export default function Initial(){
    const [tokenCheck, setTokenCheck] = useState(false);
    // const [username, setUsername] = useState('');
    // const [email, setEmail] = useState('');
    const dispatch = useDispatch();
    const token = localStorage.getItem('token');
    
    useEffect(() => {

        if(!token){
            setTokenCheck(false);
        }else{
            setTokenCheck(true);
            dispatch(getTokenInfo(token));
        }
    }, [dispatch, token]);
    
    // useEffect(() => {
        
    //     // const response = getTokenInfo(token);
    //     //         if (response) {
    //     //           dispatch(loginSuccess(response));
    //     //         }
    //     // if (token === null) {
    //     //     setTokenCheck(false);
    //     // }
    //     // else {
    //     //     const fetchData = async () => {
                
    //     //     };
        
    //     //     fetchData();        
    //     //     setTokenCheck(true);
    //     // }        
    // }, [dispatch, token]);
    //<a href="/UserProfile" onClick={handleLogin}>dfsdf</a>
    //window.location.href = "/UserProfile";
    if (tokenCheck === false) {
        return(
            <div>
                <Header/>
                <SubContent/>
            </div>
        )
    }else{
        window.location.href = "/UserProfile";
    }
}