import React from "react";
import Header from "../header/header";
import SubContent from "../subContent/subContent";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Initial(){
    const [tokenCheck, setTokenCheck] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const token = localStorage.getItem('token');
    const responseData = {
        "username" : username,
        "email" : email
    }
    useEffect(() => {
        if (token === null) {
            setTokenCheck(false);
        }
        else {
            const url = 'https://localhost:7015/api/User';
            axios.get(url, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `bearer ${token}`,
                },
            }).then((response) => {
                if (response.status === 200) {
                    setTokenCheck(true);
                    setUsername(response.data.username);
                    setEmail(response.data.email);
                }
                else if (response.status === 401) {
                    setTokenCheck(false);
                }
            });
        }        
    }, [token]);

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