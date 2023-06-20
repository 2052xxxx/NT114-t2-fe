import React from "react";
import Header from "../header/header";
import SubContent from "../subContent/subContent";
import { useState, useEffect } from "react";

export default function Initial(){
    const [tokenCheck, setTokenCheck] = useState(false);
    const token = localStorage.getItem('token');

    useEffect(() => {
        if (token === null) {
            setTokenCheck(false);
        }
        else {
            const url = 'https://localhost:7015/api/User';
            fetch(url, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `bearer ${token}`,
                },
            }).then((response) => {
                if (response.status === 200) {
                    console.log(response);
                    setTokenCheck(true);
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