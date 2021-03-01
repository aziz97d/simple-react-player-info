import React from 'react';
import './PlayerInBudget.css'

const PlayerInBudget = (props) => {
    const {name,value,image} = props.playerInfo;
    return (
        
        <div className="single-player-budget">
                <img src={image} alt=""/>
                <h6>{name}</h6>
                <h6>${value}M</h6>
        </div>
        
    );
};

export default PlayerInBudget;