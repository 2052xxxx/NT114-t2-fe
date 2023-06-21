import React from "react";
import Header from "../header/header";
import SubContent from "../subContent/subContent";
import { useDispatch } from 'react-redux';
import { useState, useEffect } from "react";
import { loginSuccess, } from '../../../redux/authActions';
import { getTokenInfo } from '../../../redux/tokenUtils';

export default function Initial(){
    const [tokenCheck, setTokenCheck] = useState(false);
    // const [username, setUsername] = useState('');
    // const [email, setEmail] = useState('');
    const dispatch = useDispatch();
    const token = localStorage.getItem('token');
    useEffect(() => {
        if (token === null) {
            setTokenCheck(false);
        }
        else {
            const fetchData = async () => {
                const response = await getTokenInfo(token);
                if (response) {
                  dispatch(loginSuccess(response));
                }
            };
        
            fetchData();        
            setTokenCheck(true);
        }        
    }, [dispatch, token]);

    if (tokenCheck === false) {
        return(
            <div>
                <Header/>
                <SubContent/>
            </div>
        )
    }else{
        return window.location.href = "/UserProfile";
    }
}