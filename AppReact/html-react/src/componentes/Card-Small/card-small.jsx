import React from 'react'
import './card-small.css';

function CardSmall(props){
    return(
        <div className="card-small">
                <p className="card-small-views">{props.pageViews}</p>
                <p className="card-small-icon">
                    <img src={props.socialMedia} alt=""/>
                </p>
                <p className="card-small-number">{props.number}</p>
                <p className="card-small-percentage">
                    <span>
                    <img src={props.icon} alt=""/>
                    {props.growth}%
                    </span>
                </p>
        </div>
    );
}

export default CardSmall;