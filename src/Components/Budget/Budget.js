import React from 'react';
import PlayerInBudget from '../PlayerInBudget/PlayerInBudget';
import './Budget.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
const Budget = (props) => {
    const players = props.selectedPlayers;
    // console.log(players)
    const totalBudget = players.reduce((total,player) => total + player.value,0);
    return (
        //bootstrap class used here
        <div className="text-white budget-section">
            <h3 className="my-3">Budget Summary</h3>
            <h5>Total Player : {players.length}</h5>
            <h5>Total Budget : $ {totalBudget}M </h5>

            <div className="all-player-budget">
                {
                    players.map(player => <PlayerInBudget playerInfo={player}></PlayerInBudget>)
                }
            </div>
        </div>
    );
};

export default Budget;