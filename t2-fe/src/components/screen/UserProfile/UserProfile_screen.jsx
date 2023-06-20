import React from "react";
import AdHeader from '../../admin/ad-header/adHeader';
import UserProfile from "./UserProfile";
import './UserProfile.css';

export default function UserProfile_screen(){
    return(
        <>
        <div className="UP_Header">
            <AdHeader/>
        </div>
        <div className="UP_Profile">
        <UserProfile/>
        </div>
        </>
        
    )
}