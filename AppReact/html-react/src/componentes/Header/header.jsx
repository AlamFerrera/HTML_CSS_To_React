import React from 'react'
import Switch from '../Switch/switch';
import './header.css';

function Header(){
    return(
    <header className="header">
        <div className="wrapper">
            <div className="header-grid">
                <div>
                    <h1>Social Media Dashboard</h1>
                    <p className="header-total">Total Followers: 23, 004</p>
                </div>
            </div>
            <Switch/>
        </div>
    </header>
    );
}

export default Header;