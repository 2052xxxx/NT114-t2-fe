import React from "react";
import AdHeader from '../../admin/ad-header/adHeader';
import UserProfile from "./UserProfile";
import './UserProfile.css';
import { useState, useEffect } from "react";

export default function UserProfile_screen(){
    // const [isHeaderVisible, setIsHeaderVisible] = useState(true);

    // useEffect(() => {
    // const handleScroll = () => {
    //     const scrollTop = window.pageYOffset;
    //     const header = document.getElementById("header");

    //     if (scrollTop > 0 && isHeaderVisible) {
    //     setIsHeaderVisible(false);
    //     header.classList.add("fade-out");
    //     } else if (scrollTop === 0 && !isHeaderVisible) {
    //     setIsHeaderVisible(true);
    //     header.classList.remove("fade-out");
    //     }
    // };

    // window.addEventListener("scroll", handleScroll);

    // return () => {
    //     window.removeEventListener("scroll", handleScroll);
    // };
    // }, [isHeaderVisible]);
    
    return(
        <>
        
          <div className="UP_Header"id="header">
            <AdHeader />
          </div>
    
        <div className="UP_Profile">
          <UserProfile />
        </div>
      </>
      
        
    )
}