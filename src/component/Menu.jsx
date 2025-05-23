import React from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/css/Style.css';
const Menu = () => {
    return (
        <div>
            <ul>
                <li><NavLink to="/" className={({ isActive }) => isActive ? 'active-link' : 'pending-link'}>Home</NavLink></li>
                <li><NavLink to="/profile" className={({ isActive }) => isActive ? 'active-link' : 'pending-link'} >Profile</NavLink></li>
            </ul>
        </div>  
    );
};

export default Menu;