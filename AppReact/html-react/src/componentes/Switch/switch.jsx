import React from 'react';
import './switch.css';

function Switch(){

    function handleChange(e){
        console.log(e);
    }

    return(
        <div className="dark-mode" >
        <p className="dark-mode-title">Dark Mode</p>
        <input type="checkbox" className="checkbox" id="checkbox" onChange={handleChange}/>
        <label className="switch" htmlFor="checkbox"/>
        </div>
    );
}

export default Switch;