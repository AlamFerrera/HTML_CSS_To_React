import React, {useRef} from 'react';
import './switch.css';

function Switch(){
    const ref = useRef(null);

    function handleChange(){
        if(ref.current.checked){
            document.body.classList.remove('is-light-mode');
            document.body.classList.add('is-dark-mode');
        }
        else{
            document.body.classList.remove('is-dark-mode');
            document.body.classList.add('is-light-mode');
        }
    }

    return(
        <div className="dark-mode" >
        <p className="dark-mode-title">Dark Mode</p>
        <input type="checkbox" className="checkbox" id="checkbox" ref={ref} onChange={handleChange}/>
        <label className="switch" htmlFor="checkbox"/>
        </div>
    );
}

export default Switch;