import React from 'react';
import './adSidebar.css';

export default function Sidebar(){
    return(
        <div className="ad-sidebar">
            <div className="ad-sidebar__logo">
                <img src="https://i.imgur.com/6XJZzWk.png" alt="logo" />
            </div>
            <div className="ad-sidebar__menu">
                <ul className="ad-sidebar__menu-list">
                    <li className="ad-sidebar__menu-item">
                        <a href="#" className="ad-sidebar__menu-link">
                            <i className="fas fa-home"></i>
                            <span>Home</span>
                        </a>
                    </li>
                    <li className="ad-sidebar__menu-item">
                        <a href="#" className="ad-sidebar__menu-link">
                            <i className="fas fa-user"></i>
                            <span>Profile</span>
                        </a>
                    </li>
                    <li className="ad-sidebar__menu-item">
                        <a href="#" className="ad-sidebar__menu-link">
                            <i className="fas fa-bell"></i>
                            <span>Notification</span>
                        </a>
                    </li>
                    <li className="ad-sidebar__menu-item">
                        <a href="#" className="ad-sidebar__menu-link">
                            <i className="fas fa-cog"></i>
                            <span>Setting</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        
    )
}