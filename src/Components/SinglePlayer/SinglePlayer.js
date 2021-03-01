import React from 'react';
import './SinglePlayer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const SinglePlayer = (props) => {
    // console.log(props);
    const {name,age,value,country,current_club,image} = props.playerData;
    // console.log(image);
    return (
        <div className="card-custom">
            <div className="card-top-custom">
                <img src={image}></img>
                <span className="name">{name}</span>
                <span className="country">{country}</span>
                <p className="price">Value : {value}M$</p>
                <p className="price">{current_club}</p>
                
            </div>
            
            <button onClick={() => {props.buyPlayerEventHandler(props.playerData)}} className="btn-custom"> <FontAwesomeIcon icon={faShoppingCart} /> Buy</button>
        </div>
       
    );
};

export default SinglePlayer;