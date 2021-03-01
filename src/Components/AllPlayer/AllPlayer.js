import React from 'react';
import SinglePlayer from '../SinglePlayer/SinglePlayer';
import './AllPlayer.css';

import { useEffect, useState } from 'react';
import Budget from '../Budget/Budget';

const AllPlayer = () => {
    
    const [selectedPlayers,setSelectedPlayers] = useState([]);
    const [players,setPlayers] = useState([]);
    useEffect(() =>{
        
        fetch('https://api.mocki.io/v1/aa75e747')
        .then(res => res.json())
        .then(data => setPlayers(data))
        
    },[]);

    const buyPlayerEventHandler = (player) =>{
        const checkValue = selectedPlayers.indexOf(player);
        if(checkValue==-1){
            const updatePlayer = [...selectedPlayers,player];
            setSelectedPlayers(updatePlayer);
        }
        
    }
    return (
        <div className="container-custom">
            <div className="All-Player-Section">
                <div className="teams">
                    {
                        players.map( player => <SinglePlayer buyPlayerEventHandler={buyPlayerEventHandler} playerData={player}></SinglePlayer>)
                    }
                </div>
            </div>
            <div className="Budget-Section">
                <Budget selectedPlayers={selectedPlayers}></Budget>
            </div>
        </div>
        
    );
};

export default AllPlayer;